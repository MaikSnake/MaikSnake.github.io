// ============================================
// FIREBASE CRUD - VEÍCULOS
// Arquivo: firebase-veiculos.js
// ============================================

/**
 * Módulo completo de gerenciamento de Veículos Diplomáticos no Firebase
 * Inclui: CREATE, READ, UPDATE, DELETE + Relacionamentos
 */

// ============================================
// CREATE - ADICIONAR NOVO VEÍCULO
// ============================================

/**
 * Adicionar novo veículo ao Firebase
 * @param {object} veiculoData - Dados do veículo
 * @returns {Promise<string>} ID do veículo criado
 */
async function criarVeiculo(veiculoData) {
  try {
    const { collection, addDoc, serverTimestamp } = window.firebaseUtils;
    
    // Gerar ID único
    const veiculoId = window.generateId('vei');
    
    // Preparar dados com timestamp e metadados
    const veiculo = {
      id: veiculoId,
      ...veiculoData,
      data_criacao: serverTimestamp(),
      data_atualizacao: serverTimestamp(),
      criado_por: 'user_admin', // TODO: Pegar do sistema de auth
      ativo: true
    };
    
    // Adicionar ao Firestore
    const docRef = await addDoc(
      collection(window.db, window.COLLECTIONS.VEICULOS),
      veiculo
    );
    
    // Registrar atividade
    await window.logAtividade('CREATE', 'veiculos', veiculoId, veiculo);
    
    console.log('✅ Veículo criado:', veiculoId);
    showSuccessMessage(`Veículo ${veiculoData.placa} adicionado com sucesso!`);
    
    return veiculoId;
  } catch (error) {
    console.error('❌ Erro ao criar veículo:', error);
    showErrorMessage('Erro ao adicionar veículo. Tente novamente.');
    throw error;
  }
}

// ============================================
// READ - BUSCAR VEÍCULOS
// ============================================

/**
 * Buscar todos os veículos
 * @returns {Promise<Array>} Lista de veículos
 */
async function buscarTodosVeiculos() {
  try {
    const { collection, getDocs, query, orderBy } = window.firebaseUtils;
    
    const q = query(
      collection(window.db, window.COLLECTIONS.VEICULOS),
      orderBy('data_criacao', 'desc')
    );
    
    const snapshot = await getDocs(q);
    const veiculos = [];
    
    snapshot.forEach(doc => {
      veiculos.push({
        firebaseId: doc.id,
        ...doc.data()
      });
    });
    
    console.log(`📊 ${veiculos.length} veículos encontrados`);
    return veiculos;
  } catch (error) {
    console.error('❌ Erro ao buscar veículos:', error);
    return [];
  }
}

/**
 * Buscar veículo por ID
 * @param {string} veiculoId - ID do veículo
 * @returns {Promise<object>} Dados do veículo
 */
async function buscarVeiculoPorId(veiculoId) {
  try {
    const { collection, query, where, getDocs } = window.firebaseUtils;
    
    const q = query(
      collection(window.db, window.COLLECTIONS.VEICULOS),
      where('id', '==', veiculoId)
    );
    
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      console.warn('⚠️ Veículo não encontrado:', veiculoId);
      return null;
    }
    
    const doc = snapshot.docs[0];
    return {
      firebaseId: doc.id,
      ...doc.data()
    };
  } catch (error) {
    console.error('❌ Erro ao buscar veículo:', error);
    return null;
  }
}

/**
 * Buscar veículos com filtros
 * @param {object} filtros - Objeto com filtros (pais, status, origem)
 * @returns {Promise<Array>} Lista filtrada
 */
async function buscarVeiculosComFiltros(filtros) {
  try {
    const { collection, query, where, getDocs, orderBy } = window.firebaseUtils;
    
    let q = collection(window.db, window.COLLECTIONS.VEICULOS);
    const constraints = [];
    
    if (filtros.pais) {
      constraints.push(where('pais', '==', filtros.pais));
    }
    if (filtros.status) {
      constraints.push(where('status', '==', filtros.status));
    }
    if (filtros.origem) {
      constraints.push(where('origem', '==', filtros.origem));
    }
    
    constraints.push(orderBy('data_criacao', 'desc'));
    
    q = query(q, ...constraints);
    const snapshot = await getDocs(q);
    
    const veiculos = [];
    snapshot.forEach(doc => {
      veiculos.push({
        firebaseId: doc.id,
        ...doc.data()
      });
    });
    
    console.log(`🔍 ${veiculos.length} veículos encontrados com filtros`);
    return veiculos;
  } catch (error) {
    console.error('❌ Erro ao filtrar veículos:', error);
    return [];
  }
}

/**
 * Buscar veículo COM processo relacionado
 * @param {string} veiculoId - ID do veículo
 * @returns {Promise<object>} Veículo com dados do processo
 */
async function buscarVeiculoComProcesso(veiculoId) {
  try {
    const veiculo = await buscarVeiculoPorId(veiculoId);
    
    if (!veiculo) return null;
    
    // Se tem processo relacionado, buscar dados do processo
    if (veiculo.processo_id) {
      const processo = await buscarProcessoPorId(veiculo.processo_id);
      veiculo.processo_dados = processo;
    }
    
    return veiculo;
  } catch (error) {
    console.error('❌ Erro ao buscar veículo com processo:', error);
    return null;
  }
}

// ============================================
// UPDATE - ATUALIZAR VEÍCULO
// ============================================

/**
 * Atualizar veículo existente
 * @param {string} firebaseId - ID do documento no Firebase
 * @param {object} dadosAtualizados - Novos dados
 * @returns {Promise<boolean>} Sucesso da operação
 */
async function atualizarVeiculo(firebaseId, dadosAtualizados) {
  try {
    const { doc, getDoc, updateDoc, serverTimestamp } = window.firebaseUtils;
    
    // Buscar dados anteriores para log
    const docRef = doc(window.db, window.COLLECTIONS.VEICULOS, firebaseId);
    const docSnap = await getDoc(docRef);
    const dadosAnteriores = docSnap.data();
    
    // Preparar atualização
    const atualizacao = {
      ...dadosAtualizados,
      data_atualizacao: serverTimestamp(),
      modificado_por: 'user_admin' // TODO: Pegar do sistema de auth
    };
    
    // Atualizar no Firestore
    await updateDoc(docRef, atualizacao);
    
    // Registrar atividade
    await window.logAtividade(
      'UPDATE',
      'veiculos',
      dadosAnteriores.id,
      atualizacao,
      dadosAnteriores
    );
    
    console.log('✅ Veículo atualizado:', dadosAnteriores.id);
    showSuccessMessage('Veículo atualizado com sucesso!');
    
    return true;
  } catch (error) {
    console.error('❌ Erro ao atualizar veículo:', error);
    showErrorMessage('Erro ao atualizar veículo. Tente novamente.');
    return false;
  }
}

// ============================================
// DELETE - DELETAR VEÍCULO
// ============================================

/**
 * Deletar veículo (soft delete - marcar como inativo)
 * @param {string} firebaseId - ID do documento no Firebase
 * @returns {Promise<boolean>} Sucesso da operação
 */
async function deletarVeiculo(firebaseId) {
  try {
    const { doc, getDoc, updateDoc, serverTimestamp } = window.firebaseUtils;
    
    // Buscar dados antes de deletar
    const docRef = doc(window.db, window.COLLECTIONS.VEICULOS, firebaseId);
    const docSnap = await getDoc(docRef);
    const dadosAnteriores = docSnap.data();
    
    // Soft delete - marcar como inativo
    await updateDoc(docRef, {
      ativo: false,
      data_exclusao: serverTimestamp(),
      excluido_por: 'user_admin' // TODO: Pegar do sistema de auth
    });
    
    // Registrar atividade
    await window.logAtividade(
      'DELETE',
      'veiculos',
      dadosAnteriores.id,
      { ativo: false },
      dadosAnteriores
    );
    
    console.log('✅ Veículo deletado (soft):', dadosAnteriores.id);
    showSuccessMessage('Veículo excluído com sucesso!');
    
    return true;
  } catch (error) {
    console.error('❌ Erro ao deletar veículo:', error);
    showErrorMessage('Erro ao excluir veículo. Tente novamente.');
    return false;
  }
}

/**
 * Deletar veículo PERMANENTEMENTE (hard delete)
 * ⚠️ USO CUIDADOSO - NÃO PODE SER DESFEITO
 * @param {string} firebaseId - ID do documento no Firebase
 * @returns {Promise<boolean>} Sucesso da operação
 */
async function deletarVeiculoPermanente(firebaseId) {
  try {
    const { doc, getDoc, deleteDoc } = window.firebaseUtils;
    
    // Buscar dados antes de deletar
    const docRef = doc(window.db, window.COLLECTIONS.VEICULOS, firebaseId);
    const docSnap = await getDoc(docRef);
    const dadosAnteriores = docSnap.data();
    
    // Deletar permanentemente
    await deleteDoc(docRef);
    
    // Registrar atividade
    await window.logAtividade(
      'DELETE_PERMANENT',
      'veiculos',
      dadosAnteriores.id,
      null,
      dadosAnteriores
    );
    
    console.log('🗑️ Veículo deletado PERMANENTEMENTE:', dadosAnteriores.id);
    showSuccessMessage('Veículo excluído permanentemente!');
    
    return true;
  } catch (error) {
    console.error('❌ Erro ao deletar veículo permanentemente:', error);
    showErrorMessage('Erro ao excluir veículo. Tente novamente.');
    return false;
  }
}

// ============================================
// INTEGRAÇÃO COM UI EXISTENTE
// ============================================

/**
 * Carregar veículos do Firebase e atualizar interface
 */
async function loadVeiculosFromFirebase() {
  try {
    // Mostrar loading
    const container = document.getElementById('vehicles-list');
    if (container) {
      container.innerHTML = '<div class="loading">Carregando veículos...</div>';
    }
    
    // Buscar veículos
    const veiculos = await buscarTodosVeiculos();
    
    // Atualizar dados locais (compatibilidade com código existente)
    if (window.appData) {
      window.appData.vehicles = veiculos;
    }
    
    // Renderizar na interface
    if (typeof renderVehiclesList === 'function') {
      renderVehiclesList();
    }
    
    // Atualizar estatísticas
    if (typeof updateVehicleStats === 'function') {
      updateVehicleStats();
    }
    
    console.log('✅ Veículos carregados do Firebase');
  } catch (error) {
    console.error('❌ Erro ao carregar veículos do Firebase:', error);
    showErrorMessage('Erro ao carregar veículos. Verifique sua conexão.');
  }
}

/**
 * Salvar veículo no Firebase (integrado com formulário existente)
 * Substitui ou complementa a função saveVehicle() existente
 */
async function saveVehicleToFirebase() {
  try {
    const veiculoData = {
      pais: document.getElementById('vehicle-pais').value,
      nome_responsavel: document.getElementById('vehicle-nome').value,
      veiculo: document.getElementById('vehicle-veiculo').value,
      chassi: document.getElementById('vehicle-chassi').value,
      placa: document.getElementById('vehicle-placa').value,
      processo: document.getElementById('vehicle-processo').value,
      data_entrada: document.getElementById('vehicle-entrada').value,
      origem: document.getElementById('vehicle-origem').value,
      observacao: document.getElementById('vehicle-observacao').value || '',
      data_saida: document.getElementById('vehicle-saida').value || null,
      status: document.getElementById('vehicle-status').value,
      ged_sei: document.getElementById('vehicle-ged').value,
      email_remetente: document.getElementById('vehicle-email').value,
      obs_adicional: document.getElementById('vehicle-obs').value || ''
    };
    
    // Verificar se é edição ou criação
    const vehicleId = document.getElementById('vehicle-id').value;
    
    if (vehicleId) {
      // ATUALIZAR veículo existente
      await atualizarVeiculo(vehicleId, veiculoData);
    } else {
      // CRIAR novo veículo
      await criarVeiculo(veiculoData);
    }
    
    // Fechar modal
    if (typeof closeVehicleModal === 'function') {
      closeVehicleModal();
    }
    
    // Recarregar lista
    await loadVeiculosFromFirebase();
    
  } catch (error) {
    console.error('❌ Erro ao salvar veículo:', error);
    showErrorMessage('Erro ao salvar veículo no Firebase.');
  }
}

// ============================================
// EXPORTAR FUNÇÕES
// ============================================

window.firebaseVeiculos = {
  criar: criarVeiculo,
  buscarTodos: buscarTodosVeiculos,
  buscarPorId: buscarVeiculoPorId,
  buscarComFiltros: buscarVeiculosComFiltros,
  buscarComProcesso: buscarVeiculoComProcesso,
  atualizar: atualizarVeiculo,
  deletar: deletarVeiculo,
  deletarPermanente: deletarVeiculoPermanente,
  loadFromFirebase: loadVeiculosFromFirebase,
  saveToFirebase: saveVehicleToFirebase
};

console.log('✅ Módulo Firebase Veículos carregado!');