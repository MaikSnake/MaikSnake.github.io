// ==========================================
// CONFIGURAÇÃO INICIAL E DADOS
// ==========================================
let appData = {
  processes: [
    {"id": 1, "title": "Carteira Diplomática - Embaixador França", "type": "Carteira Diplomática", "status": "Em Andamento", "priority": "Alta", "assignee": "Maria Silva", "created": "2025-10-01", "updated": "2025-10-07"},
    {"id": 2, "title": "Visto Oficial - Delegação ONU", "type": "Visto", "status": "Pendente", "priority": "Média", "assignee": "João Santos", "created": "2025-10-05", "updated": "2025-10-06"},
    {"id": 3, "title": "Imunidade Fiscal - Consulado Alemanha", "type": "Imunidade", "status": "Concluído", "priority": "Baixa", "assignee": "Ana Costa", "created": "2025-09-28", "updated": "2025-10-02"},
    {"id": 4, "title": "Registro Funcionário - UNESCO", "type": "Registro", "status": "Em Análise", "priority": "Alta", "assignee": "Carlos Lima", "created": "2025-10-03", "updated": "2025-10-07"},
    {"id": 5, "title": "Placa Diplomática - Embaixada Japão", "type": "Placa Diplomática", "status": "Em Andamento", "priority": "Média", "assignee": "Maria Silva", "created": "2025-10-04", "updated": "2025-10-07"}
  ],
  documents: [
    {"id": 1, "name": "Passaporte Diplomático - França", "type": "Passaporte", "size": "2.1 MB", "uploaded": "2025-10-01", "status": "Validado"},
    {"id": 2, "name": "Carta Credencial - ONU", "type": "Credencial", "size": "1.8 MB", "uploaded": "2025-10-05", "status": "Pendente"},
    {"id": 3, "name": "Certidão Fiscal - Alemanha", "type": "Certidão", "size": "987 KB", "uploaded": "2025-09-28", "status": "Aprovado"},
    {"id": 4, "name": "Contrato Trabalho - UNESCO", "type": "Contrato", "size": "3.2 MB", "uploaded": "2025-10-03", "status": "Em Análise"}
  ],
  automations: [
    {"id": 1, "name": "Validação CPF/CNPJ", "type": "Validação", "runs": 45, "success": 44, "status": "Ativo"},
    {"id": 2, "name": "Geração Protocolo", "type": "Geração", "runs": 32, "success": 32, "status": "Ativo"},
    {"id": 3, "name": "Notificação Email", "type": "Notificação", "runs": 67, "success": 65, "status": "Ativo"},
    {"id": 4, "name": "Backup Documentos", "type": "Backup", "runs": 12, "success": 12, "status": "Ativo"}
  ],
  // ==========================================
  // NOVO MÓDULO: GESTÃO DE VEÍCULOS DIPLOMÁTICOS
  // ==========================================
  vehicles: [
    {
      "id": 1,
      "pais": "França",
      "nome": "Embaixador Jean-Pierre Dubois",
      "veiculo": "Mercedes-Benz S-Class 2024",
      "chassi": "WDD2220341A123456",
      "placa": "CD 0001",
      "processo": "2025/CGPI/VEI/0015",
      "entrada": "2025-01-15",
      "origem": "Importado",
      "observacao": "Veículo oficial do embaixador",
      "saida": "",
      "status": "Ativo",
      "ged_sei": "SEI-12345/2025",
      "email_remetente": "embaixada.franca@diplomatie.gouv.fr",
      "obs_adicional": "Isenção fiscal aprovada"
    },
    {
      "id": 2,
      "pais": "Alemanha",
      "nome": "Cônsul Klaus Müller",
      "veiculo": "BMW X5 2023",
      "chassi": "5UXCR6C09L9D12345",
      "placa": "CD 0045",
      "processo": "2024/CGPI/VEI/0234",
      "entrada": "2024-11-20",
      "origem": "Importado",
      "observacao": "Veículo consular",
      "saida": "",
      "status": "Ativo",
      "ged_sei": "GED-78901/2024",
      "email_remetente": "konsulat.brasilien@auswaertiges-amt.de",
      "obs_adicional": ""
    },
    {
      "id": 3,
      "pais": "Japão",
      "nome": "Embaixada do Japão",
      "veiculo": "Toyota Camry Hybrid 2024",
      "chassi": "4T1G11AK5NU123456",
      "placa": "CD 0078",
      "processo": "2025/CGPI/VEI/0089",
      "entrada": "2025-03-10",
      "origem": "Nacional",
      "observacao": "Frota administrativa",
      "saida": "",
      "status": "Ativo",
      "ged_sei": "SEI-45678/2025",
      "email_remetente": "emb.japao@mofa.go.jp",
      "obs_adicional": "Aquisição nacional via concessionária autorizada"
    },
    {
      "id": 4,
      "pais": "Estados Unidos",
      "nome": "Adido Militar John Smith",
      "veiculo": "Chevrolet Suburban 2022",
      "chassi": "1GNSKCKD8NR123456",
      "placa": "CD 0112",
      "processo": "2022/CGPI/VEI/0445",
      "entrada": "2022-08-05",
      "origem": "Importado",
      "observacao": "Veículo blindado",
      "saida": "2025-02-28",
      "status": "Baixado",
      "ged_sei": "GED-23456/2022",
      "email_remetente": "brasilia-usembassy@state.gov",
      "obs_adicional": "Transferido para outro país"
    },
    {
      "id": 5,
      "pais": "Itália",
      "nome": "Secretário Cultural Giuseppe Rossi",
      "veiculo": "Fiat Cronos 2023",
      "chassi": "9BD362U06PB123456",
      "placa": "CD 0156",
      "processo": "2023/CGPI/VEI/0567",
      "entrada": "2023-06-12",
      "origem": "Nacional",
      "observacao": "Veículo de uso administrativo",
      "saida": "",
      "status": "Ativo",
      "ged_sei": "SEI-67890/2023",
      "email_remetente": "segreteria.brasilia@esteri.it",
      "obs_adicional": "Manutenção programada em outubro"
    },
    {
      "id": 6,
      "pais": "Reino Unido",
      "nome": "Embaixador William Thompson",
      "veiculo": "Land Rover Discovery 2024",
      "chassi": "SALCA2BN8NH123456",
      "placa": "CD 0203",
      "processo": "2025/CGPI/VEI/0102",
      "entrada": "2025-04-22",
      "origem": "Importado",
      "observacao": "Veículo representação",
      "saida": "",
      "status": "Em Análise",
      "ged_sei": "SEI-34567/2025",
      "email_remetente": "ukembassy.brasilia@fcdo.gov.uk",
      "obs_adicional": "Aguardando documentação complementar"
    }
  ],
  analytics: {
    totalProcesses: 125,
    pendingProcesses: 23,
    completedProcesses: 89,
    activeAutomations: 4,
    monthlyData: [
      {"month": "Mai", "processes": 18, "completed": 15},
      {"month": "Jun", "processes": 22, "completed": 19},
      {"month": "Jul", "processes": 25, "completed": 23},
      {"month": "Ago", "processes": 28, "completed": 26},
      {"month": "Set", "processes": 20, "completed": 18},
      {"month": "Out", "processes": 12, "completed": 8}
    ],
    processByType: [
      {"type": "Carteira Diplomática", "count": 35},
      {"type": "Visto", "count": 28},
      {"type": "Imunidade", "count": 22},
      {"type": "Registro", "count": 25},
      {"type": "Placa Diplomática", "count": 15}
    ]
  },
  users: [
    {"id": 1, "name": "Maria Silva", "role": "Analista Senior", "email": "maria.silva@mre.gov.br"},
    {"id": 2, "name": "João Santos", "role": "Especialista", "email": "joao.santos@mre.gov.br"},
    {"id": 3, "name": "Ana Costa", "role": "Coordenadora", "email": "ana.costa@mre.gov.br"},
    {"id": 4, "name": "Carlos Lima", "role": "Analista", "email": "carlos.lima@mre.gov.br"}
  ]
};

// ==========================================
// VARIÁVEIS GLOBAIS
// ==========================================
let statusChart, monthlyChart, typeChart;

// Filters state
let vehicleFilters = {
  pais: '',
  status: '',
  origem: '',
  searchTerm: ''
};

// ==========================================
// ELEMENTOS DO DOM
// ==========================================
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const pages = document.querySelectorAll('.page');

function loadVehicles() {
  renderVehiclesList();
  updateVehicleStats();
}

function updateVehicleStats() {
  const total = appData.vehicles.length;
  const ativos = appData.vehicles.filter(v => v.status === 'Ativo').length;
  const importados = appData.vehicles.filter(v => v.origem === 'Importado').length;
  const nacionais = appData.vehicles.filter(v => v.origem === 'Nacional').length;
  
  document.getElementById('total-vehicles').textContent = total;
  document.getElementById('active-vehicles').textContent = ativos;
  document.getElementById('imported-vehicles').textContent = importados;
  document.getElementById('national-vehicles').textContent = nacionais;
}

function renderVehiclesList() {
  const container = document.getElementById('vehicles-list');
  let filtered = appData.vehicles;

  // Apply filters
  if (vehicleFilters.pais) {
    filtered = filtered.filter(v => v.pais.toLowerCase().includes(vehicleFilters.pais.toLowerCase()));
  }
  if (vehicleFilters.status) {
    filtered = filtered.filter(v => v.status === vehicleFilters.status);
  }
  if (vehicleFilters.origem) {
    filtered = filtered.filter(v => v.origem === vehicleFilters.origem);
  }
  if (vehicleFilters.searchTerm) {
    const term = vehicleFilters.searchTerm.toLowerCase();
    filtered = filtered.filter(v => 
      v.nome.toLowerCase().includes(term) ||
      v.veiculo.toLowerCase().includes(term) ||
      v.placa.toLowerCase().includes(term) ||
      v.chassi.toLowerCase().includes(term)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = '<div class="no-results"><i class="fas fa-car"></i><p>Nenhum veículo encontrado</p></div>';
    return;
  }

  container.innerHTML = filtered.map(vehicle => `
    <div class="vehicle-card">
      <div class="vehicle-header">
        <div class="vehicle-title">
          <h3><i class="fas fa-car"></i> ${vehicle.veiculo}</h3>
          <span class="vehicle-placa">${vehicle.placa}</span>
        </div>
        <span class="badge status-${vehicle.status.toLowerCase().replace(' ', '-')}">${vehicle.status}</span>
      </div>
      <div class="vehicle-info">
        <div class="info-row">
          <span class="info-label"><i class="fas fa-flag"></i> País:</span>
          <span class="info-value">${vehicle.pais}</span>
        </div>
        <div class="info-row">
          <span class="info-label"><i class="fas fa-user"></i> Nome:</span>
          <span class="info-value">${vehicle.nome}</span>
        </div>
        <div class="info-row">
          <span class="info-label"><i class="fas fa-hashtag"></i> Chassi:</span>
          <span class="info-value">${vehicle.chassi}</span>
        </div>
        <div class="info-row">
          <span class="info-label"><i class="fas fa-folder-open"></i> Processo:</span>
          <span class="info-value">${vehicle.processo}</span>
        </div>
        <div class="info-row">
          <span class="info-label"><i class="fas fa-calendar-alt"></i> Entrada:</span>
          <span class="info-value">${formatDate(vehicle.entrada)}</span>
        </div>
        <div class="info-row">
          <span class="info-label"><i class="fas fa-shipping-fast"></i> Origem:</span>
          <span class="info-value"><span class="badge badge-${vehicle.origem.toLowerCase()}">${vehicle.origem}</span></span>
        </div>
        ${vehicle.saida ? `
        <div class="info-row">
          <span class="info-label"><i class="fas fa-sign-out-alt"></i> Saída:</span>
          <span class="info-value">${formatDate(vehicle.saida)}</span>
        </div>
        ` : ''}
        <div class="info-row">
          <span class="info-label"><i class="fas fa-file-alt"></i> GED/SEI:</span>
          <span class="info-value">${vehicle.ged_sei}</span>
        </div>
        <div class="info-row">
          <span class="info-label"><i class="fas fa-envelope"></i> E-mail:</span>
          <span class="info-value">${vehicle.email_remetente}</span>
        </div>
        ${vehicle.observacao ? `
        <div class="info-row full-width">
          <span class="info-label"><i class="fas fa-sticky-note"></i> Observação:</span>
          <span class="info-value">${vehicle.observacao}</span>
        </div>
        ` : ''}
        ${vehicle.obs_adicional ? `
        <div class="info-row full-width">
          <span class="info-label"><i class="fas fa-comment"></i> OBS Adicional:</span>
          <span class="info-value">${vehicle.obs_adicional}</span>
        </div>
        ` : ''}
      </div>
      <div class="vehicle-actions">
        <button class="btn-secondary btn-sm" onclick="viewVehicleDetails(${vehicle.id})">
          <i class="fas fa-eye"></i> Detalhes
        </button>
        <button class="btn-secondary btn-sm" onclick="editVehicle(${vehicle.id})">
          <i class="fas fa-edit"></i> Editar
        </button>
        <button class="btn-danger btn-sm" onclick="deleteVehicle(${vehicle.id})">
          <i class="fas fa-trash"></i> Excluir
        </button>
      </div>
    </div>
  `).join('');
}

function applyVehicleFilters() {
  vehicleFilters.pais = document.getElementById('filter-pais').value;
  vehicleFilters.status = document.getElementById('filter-status').value;
  vehicleFilters.origem = document.getElementById('filter-origem').value;
  renderVehiclesList();
}

function searchVehicles() {
  vehicleFilters.searchTerm = document.getElementById('search-vehicles').value;
  renderVehiclesList();
}

function resetVehicleFilters() {
  vehicleFilters = { pais: '', status: '', origem: '', searchTerm: '' };
  document.getElementById('filter-pais').value = '';
  document.getElementById('filter-status').value = '';
  document.getElementById('filter-origem').value = '';
  document.getElementById('search-vehicles').value = '';
  renderVehiclesList();
}

function openVehicleModal() {
  document.getElementById('vehicle-modal').classList.remove('hidden'); // 
  document.getElementById('vehicle-form').reset();
  document.getElementById('vehicle-id').value = '';
  document.getElementById('modal-title').textContent = 'Adicionar Novo Veículo';
}

function closeVehicleModal() {
  document.getElementById('vehicle-modal').classList.add('hidden'); // Correto
}

function saveVehicle() { 
  const id = document.getElementById('vehicle-id').value;
  const vehicleData = {
    pais: document.getElementById('vehicle-pais').value,
    nome: document.getElementById('vehicle-nome').value,
    veiculo: document.getElementById('vehicle-veiculo').value,
    chassi: document.getElementById('vehicle-chassi').value,
    placa: document.getElementById('vehicle-placa').value,
    processo: document.getElementById('vehicle-processo').value,
    entrada: document.getElementById('vehicle-entrada').value,
    origem: document.getElementById('vehicle-origem').value,
    observacao: document.getElementById('vehicle-observacao').value,
    saida: document.getElementById('vehicle-saida').value,
    status: document.getElementById('vehicle-status').value,
    ged_sei: document.getElementById('vehicle-ged').value,
    email_remetente: document.getElementById('vehicle-email').value,
    obs_adicional: document.getElementById('vehicle-obs').value
  };
    
  if (id) {
    // Update existing
    const index = appData.vehicles.findIndex(v => v.id === parseInt(id));
    appData.vehicles[index] = { ...appData.vehicles[index], ...vehicleData };
    showSuccessMessage('Veículo atualizado com sucesso!');
  } else {
    // Add new
    const newId = Math.max(...appData.vehicles.map(v => v.id)) + 1;
    appData.vehicles.push({ id: newId, ...vehicleData });
    showSuccessMessage('Veículo adicionado com sucesso!');
  }

  closeVehicleModal();
  loadVehicles();
}

// Funções para gerenciamento de veículos
function viewVehicleDetails(id) {
    const vehicle = appData.vehicles.find(v => v.id === id);
    if (!vehicle) return;

    const detailsHTML = `
        <div class="vehicle-details">
            <h3>${vehicle.veiculo}</h3>
            <div class="details-grid">
                <div><strong>País:</strong> ${vehicle.pais}</div>
                <div><strong>Nome:</strong> ${vehicle.nome}</div>
                <div><strong>Chassi:</strong> ${vehicle.chassi}</div>
                <div><strong>Placa:</strong> ${vehicle.placa}</div>
                <div><strong>Processo:</strong> ${vehicle.processo}</div>
                <div><strong>Status:</strong> ${vehicle.status}</div>
                <div><strong>Entrada:</strong> ${formatDate(vehicle.entrada)}</div>
                <div><strong>Origem:</strong> ${vehicle.origem}</div>
                ${vehicle.saida ? `<div><strong>Saída:</strong> ${formatDate(vehicle.saida)}</div>` : ''}
                <div><strong>GED/SEI:</strong> ${vehicle.ged_sei}</div>
                <div><strong>Email:</strong> ${vehicle.email_remetente}</div>
                ${vehicle.observacao ? `<div><strong>Observação:</strong> ${vehicle.observacao}</div>` : ''}
                ${vehicle.obs_adicional ? `<div><strong>Obs Adicional:</strong> ${vehicle.obs_adicional}</div>` : ''}
            </div>
        </div>
    `;

    showModal('Detalhes do Veículo', detailsHTML);
}

function editVehicle(id) {
    const vehicle = appData.vehicles.find(v => v.id === id);
    if (!vehicle) return;

    // Preenche o formulário com os dados do veículo
    document.getElementById('vehicle-id').value = vehicle.id;
    document.getElementById('vehicle-pais').value = vehicle.pais;
    document.getElementById('vehicle-nome').value = vehicle.nome;
    document.getElementById('vehicle-veiculo').value = vehicle.veiculo;
    document.getElementById('vehicle-chassi').value = vehicle.chassi;
    document.getElementById('vehicle-placa').value = vehicle.placa;
    document.getElementById('vehicle-processo').value = vehicle.processo;
    document.getElementById('vehicle-entrada').value = vehicle.entrada;
    document.getElementById('vehicle-origem').value = vehicle.origem;
    document.getElementById('vehicle-status').value = vehicle.status;
    document.getElementById('vehicle-observacao').value = vehicle.observacao || '';
    document.getElementById('vehicle-saida').value = vehicle.saida || '';
    document.getElementById('vehicle-ged').value = vehicle.ged_sei;
    document.getElementById('vehicle-email').value = vehicle.email_remetente;
    document.getElementById('vehicle-obs').value = vehicle.obs_adicional || '';

    // Abre o modal
    document.getElementById('vehicle-modal').classList.remove('hidden');
}

function deleteVehicle(id) {
    if (confirm('Tem certeza que deseja excluir este veículo?')) {
        const index = appData.vehicles.findIndex(v => v.id === id);
        if (index > -1) {
            appData.vehicles.splice(index, 1);
            showSuccessMessage('Veículo excluído com sucesso!');
            loadVehicles(); // Recarrega a lista de veículos
        }
    }
}

// Função auxiliar para mostrar modal
function showModal(title, content) {
    const modalHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${title}</h2>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                ${content}
            </div>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = modalHTML;

    // Adiciona o modal ao DOM
    document.body.appendChild(modal);

    // Configura o fechamento do modal
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}

// Header Functions
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');
  
  // For mobile
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle('mobile-open');
    
    // Create overlay for mobile
    let overlay = document.querySelector('.sidebar-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'sidebar-overlay';
      overlay.addEventListener('click', () => {
        sidebar.classList.remove('mobile-open');
        overlay.classList.remove('active');
      });
      document.body.appendChild(overlay);
    }
    
    if (sidebar.classList.contains('mobile-open')) {
      overlay.classList.add('active');
    } else {
      overlay.classList.remove('active');
    }
  } else {
    // For desktop
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('expanded');
  }
}

function toggleNotifications() {
  const dropdown = document.getElementById('notifications-dropdown');
  const userMenu = document.getElementById('user-menu-dropdown');
  
  // Close user menu if open
  userMenu.classList.add('hidden');
  document.querySelector('.user-menu-btn').classList.remove('active');
  
  dropdown.classList.toggle('hidden');
}

function toggleUserMenu() {
  const dropdown = document.getElementById('user-menu-dropdown');
  const notifications = document.getElementById('notifications-dropdown');
  const btn = document.querySelector('.user-menu-btn');
  
  // Close notifications if open
  notifications.classList.add('hidden');
  
  dropdown.classList.toggle('hidden');
  btn.classList.toggle('active');
}

function markAllAsRead() {
  const notifications = document.querySelectorAll('.notification-item.unread');
  notifications.forEach(notification => {
    notification.classList.remove('unread');
  });
  
  // Update badge
  const badge = document.querySelector('.notification-badge');
  badge.textContent = '0';
  badge.style.display = 'none';
  
  showSuccessMessage('Todas as notificações foram marcadas como lidas!');
}

function showProfile() {
  closeAllDropdowns();
  showSuccessMessage('Redirecionando para o perfil do usuário...');
}

function showUserSettings() {
  closeAllDropdowns();
  showPage('settings');
  
  // Update active sidebar link
  sidebarLinks.forEach(l => l.classList.remove('active'));
  document.querySelector('[data-page="settings"]').classList.add('active');
}

function logout() {
  closeAllDropdowns();
  if (confirm('Tem certeza que deseja sair do sistema?')) {
    showSuccessMessage('Logout realizado com sucesso! Redirecionando...');
    setTimeout(() => {
      alert('Você foi desconectado do DiploSys MVP');
    }, 1500);
  }
}

function closeAllDropdowns() {
  document.getElementById('notifications-dropdown').classList.add('hidden');
  document.getElementById('user-menu-dropdown').classList.add('hidden');
  document.querySelector('.user-menu-btn').classList.remove('active');
}

// Navigation
function initNavigation() {
  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPage = link.dataset.page;
      showPage(targetPage);
      
      // Update active state
      sidebarLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      // Close sidebar on mobile after navigation
      if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        sidebar.classList.remove('mobile-open');
        if (overlay) overlay.classList.remove('active');
      }
    });
  });
}

function showPage(pageId) {
  // Verificar se a coleção pages existe
  if (typeof pages !== 'undefined') {
    pages.forEach(page => page.classList.remove('active'));
  }

  // Verificar se o elemento existe antes de tentar acessá-lo
  const targetPage = document.getElementById(pageId);
  if (!targetPage) {
    console.warn(`Página ${pageId} não encontrada`);
    return;
  }

  targetPage.classList.add('active');
  
  // Verificar se as funções existem antes de chamá-las
  switch(pageId) {
    case 'dashboard':
      if (typeof loadDashboard === 'function') loadDashboard();
      break;
    case 'processes':
      if (typeof loadProcesses === 'function') loadProcesses();
      break;
    case 'documents':
      if (typeof loadDocuments === 'function') loadDocuments();
      break;
    case 'credenciamento':
      if (typeof loadCredenciamento === 'function') loadCredenciamento();
      break;
    case 'vehicles': 
      if (typeof loadVehicles === 'function') loadVehicles();
      break;
    case 'automations':
      if (typeof loadAutomations === 'function') loadAutomations();
      break;
    case 'analytics':
      if (typeof loadAnalytics === 'function') loadAnalytics();
      break;
    case 'settings':
      if (typeof loadSettings === 'function') loadSettings();
      break;
    default:
      console.warn(`Página ${pageId} não tem função de carregamento definida`);
  }
}

// Dashboard Functions
function loadDashboard() {
  updateStats();
  loadRecentProcesses();
  createStatusChart();
}

function updateStats() {
  document.getElementById('total-processes').textContent = appData.analytics.totalProcesses;
  document.getElementById('pending-processes').textContent = appData.analytics.pendingProcesses;
  document.getElementById('completed-processes').textContent = appData.analytics.completedProcesses;
  document.getElementById('active-automations').textContent = appData.analytics.activeAutomations;
}

function loadRecentProcesses() {
  const container = document.getElementById('recent-processes');
  const recentProcesses = appData.processes.slice(0, 3);
  
  container.innerHTML = recentProcesses.map(process => `
    <div class="recent-process">
      <div class="recent-process-info">
        <h4>${process.title}</h4>
        <p>${process.type} • ${process.assignee}</p>
      </div>
      <span class="status-badge status-badge--${getStatusClass(process.status)}">${process.status}</span>
    </div>
  `).join('');
}

function createStatusChart() {
  const ctx = document.getElementById('statusChart').getContext('2d');
  
  if (statusChart) {
    statusChart.destroy();
  }
  
  const statusData = {
    'Em Andamento': 0,
    'Pendente': 0,
    'Concluído': 0,
    'Em Análise': 0
  };
  
  appData.processes.forEach(process => {
    statusData[process.status]++;
  });
  
  statusChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(statusData),
      datasets: [{
        data: Object.values(statusData),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

// Processes Functions
function loadProcesses() {
  renderProcessesTable();
  setupProcessFilters();
}

function renderProcessesTable(filteredProcesses = null) {
  const container = document.getElementById('processes-table');
  const processes = filteredProcesses || appData.processes;
  
  container.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>Título</th>
          <th>Tipo</th>
          <th>Status</th>
          <th>Prioridade</th>
          <th>Responsável</th>
          <th>Criado</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        ${processes.map(process => `
          <tr>
            <td>${process.title}</td>
            <td>${process.type}</td>
            <td><span class="status-badge status-badge--${getStatusClass(process.status)}">${process.status}</span></td>
            <td><span class="priority-badge priority-badge--${getPriorityClass(process.priority)}">${process.priority}</span></td>
            <td>${process.assignee}</td>
            <td>${formatDate(process.created)}</td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon btn-icon--primary" onclick="editProcess(${process.id})" title="Editar">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon btn-icon--danger" onclick="deleteProcess(${process.id})" title="Excluir">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function setupProcessFilters() {
  const searchInput = document.getElementById('process-search');
  const statusFilter = document.getElementById('process-status-filter');
  const typeFilter = document.getElementById('process-type-filter');
  
  function applyFilters() {
    let filtered = appData.processes;
    
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
      filtered = filtered.filter(process => 
        process.title.toLowerCase().includes(searchTerm) ||
        process.type.toLowerCase().includes(searchTerm) ||
        process.assignee.toLowerCase().includes(searchTerm)
      );
    }
    
    const statusValue = statusFilter.value;
    if (statusValue) {
      filtered = filtered.filter(process => process.status === statusValue);
    }
    
    const typeValue = typeFilter.value;
    if (typeValue) {
      filtered = filtered.filter(process => process.type === typeValue);
    }
    
    renderProcessesTable(filtered);
  }
  
  searchInput.addEventListener('input', applyFilters);
  statusFilter.addEventListener('change', applyFilters);
  typeFilter.addEventListener('change', applyFilters);
}

// Documents Functions
function loadDocuments() {
  renderDocuments();
}

function renderDocuments() {
  const container = document.getElementById('documents-grid');
  
  container.innerHTML = appData.documents.map(doc => `
    <div class="document-card">
      <div class="document-header">
        <div class="document-icon">
          <i class="fas fa-file-alt"></i>
        </div>
        <div class="document-info">
          <h3>${doc.name}</h3>
          <p>${doc.type}</p>
        </div>
      </div>
      <div class="document-meta">
        <span class="document-size">${doc.size}</span>
        <span class="status-badge status-badge--${getStatusClass(doc.status)}">${doc.status}</span>
      </div>
      <div class="action-buttons" style="margin-top: 12px;">
        <button class="btn-icon btn-icon--primary" onclick="viewDocument(${doc.id})" title="Visualizar">
          <i class="fas fa-eye"></i>
        </button>
        <button class="btn-icon btn-icon--primary" onclick="downloadDocument(${doc.id})" title="Download">
          <i class="fas fa-download"></i>
        </button>
        <button class="btn-icon btn-icon--danger" onclick="deleteDocument(${doc.id})" title="Excluir">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `).join('');
}

// Automations Functions
function loadAutomations() {
  renderAutomations();
}

function renderAutomations() {
  const container = document.getElementById('automations-grid');
  
  container.innerHTML = appData.automations.map(automation => `
    <div class="automation-card">
      <div class="automation-header">
        <h3>${automation.name}</h3>
        <span class="automation-status">${automation.status}</span>
      </div>
      <p style="color: var(--color-text-secondary); margin: 12px 0;">${automation.type}</p>
      <div class="automation-stats">
        <div class="automation-stat">
          <div class="automation-stat-value">${automation.runs}</div>
          <div class="automation-stat-label">Execuções</div>
        </div>
        <div class="automation-stat">
          <div class="automation-stat-value">${automation.success}</div>
          <div class="automation-stat-label">Sucessos</div>
        </div>
        <div class="automation-stat">
          <div class="automation-stat-value">${Math.round((automation.success / automation.runs) * 100)}%</div>
          <div class="automation-stat-label">Taxa Sucesso</div>
        </div>
      </div>
      <div class="action-buttons" style="margin-top: 16px;">
        <button class="btn-icon btn-icon--primary" onclick="runAutomation(${automation.id})" title="Executar">
          <i class="fas fa-play"></i>
        </button>
        <button class="btn-icon btn-icon--primary" onclick="editAutomation(${automation.id})" title="Editar">
          <i class="fas fa-edit"></i>
        </button>
        <button class="btn-icon btn-icon--danger" onclick="deleteAutomation(${automation.id})" title="Excluir">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `).join('');
}

// Analytics Functions
function loadAnalytics() {
  createMonthlyChart();
  createTypeChart();
}

function createMonthlyChart() {
  const ctx = document.getElementById('monthlyChart').getContext('2d');
  
  if (monthlyChart) {
    monthlyChart.destroy();
  }
  
  monthlyChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: appData.analytics.monthlyData.map(d => d.month),
      datasets: [{
        label: 'Processos Criados',
        data: appData.analytics.monthlyData.map(d => d.processes),
        borderColor: '#1FB8CD',
        backgroundColor: 'rgba(31, 184, 205, 0.1)',
        tension: 0.4
      }, {
        label: 'Processos Concluídos',
        data: appData.analytics.monthlyData.map(d => d.completed),
        borderColor: '#B4413C',
        backgroundColor: 'rgba(180, 65, 60, 0.1)',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function createTypeChart() {
  const ctx = document.getElementById('typeChart').getContext('2d');
  
  if (typeChart) {
    typeChart.destroy();
  }
  
  typeChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: appData.analytics.processByType.map(d => d.type),
      datasets: [{
        label: 'Quantidade',
        data: appData.analytics.processByType.map(d => d.count),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Settings Functions
function loadSettings() {
  renderUsers();
}

function renderUsers() {
  const container = document.getElementById('users-list');
  
  container.innerHTML = appData.users.map(user => `
    <div class="user-item">
      <div class="user-avatar">${user.name.charAt(0)}</div>
      <div class="user-info">
        <h4>${user.name}</h4>
        <p>${user.role} • ${user.email}</p>
      </div>
    </div>
  `).join('');
}

// Modal Functions
function openModal(modalId) {
  document.getElementById(modalId).classList.remove('hidden');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.add('hidden');
  // Clear form if exists
  const form = document.querySelector(`#${modalId} form`);
  if (form) form.reset();
}

// Form Submissions
function submitProcess() {
  const title = document.getElementById('process-title').value;
  const type = document.getElementById('process-type').value;
  const priority = document.getElementById('process-priority').value;
  const assignee = document.getElementById('process-assignee').value;
  
  if (!title || !type || !priority || !assignee) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }
  
  const newProcess = {
    id: appData.processes.length + 1,
    title,
    type,
    status: 'Pendente',
    priority,
    assignee,
    created: new Date().toISOString().split('T')[0],
    updated: new Date().toISOString().split('T')[0]
  };
  
  appData.processes.push(newProcess);
  appData.analytics.totalProcesses++;
  appData.analytics.pendingProcesses++;
  
  showSuccessMessage('Processo criado com sucesso!');
  closeModal('process-modal');
  
  if (document.getElementById('processes').classList.contains('active')) {
    loadProcesses();
  }
  if (document.getElementById('dashboard').classList.contains('active')) {
    loadDashboard();
  }
}

function submitDocument() {
  const name = document.getElementById('document-name').value;
  const type = document.getElementById('document-type').value;
  const file = document.getElementById('document-file').files[0];
  
  if (!name || !type || !file) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }
  
  const newDocument = {
    id: appData.documents.length + 1,
    name,
    type,
    size: formatFileSize(file.size),
    uploaded: new Date().toISOString().split('T')[0],
    status: 'Pendente'
  };
  
  appData.documents.push(newDocument);
  
  showSuccessMessage('Documento adicionado com sucesso!');
  closeModal('document-modal');
  
  if (document.getElementById('documents').classList.contains('active')) {
    loadDocuments();
  }
}

function submitAutomation() {
  const name = document.getElementById('automation-name').value;
  const type = document.getElementById('automation-type').value;
  
  if (!name || !type) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }
  
  const newAutomation = {
    id: appData.automations.length + 1,
    name,
    type,
    runs: 0,
    success: 0,
    status: 'Ativo'
  };
  
  appData.automations.push(newAutomation);
  appData.analytics.activeAutomations++;
  
  showSuccessMessage('Automação criada com sucesso!');
  closeModal('automation-modal');
  
  if (document.getElementById('automations').classList.contains('active')) {
    loadAutomations();
  }
  if (document.getElementById('dashboard').classList.contains('active')) {
    loadDashboard();
  }
}

// CRUD Operations
function editProcess(id) {
  const process = appData.processes.find(p => p.id === id);
  if (process) {
    showSuccessMessage(`Função de edição será implementada para: ${process.title}`);
  }
}

function deleteProcess(id) {
  if (confirm('Tem certeza que deseja excluir este processo?')) {
    const index = appData.processes.findIndex(p => p.id === id);
    if (index > -1) {
      appData.processes.splice(index, 1);
      appData.analytics.totalProcesses--;
      showSuccessMessage('Processo excluído com sucesso!');
      loadProcesses();
      if (document.getElementById('dashboard').classList.contains('active')) {
        loadDashboard();
      }
    }
  }
}

function viewDocument(id) {
  const doc = appData.documents.find(d => d.id === id);
  if (doc) {
    showSuccessMessage(`Visualizando documento: ${doc.name}`);
  }
}

function downloadDocument(id) {
  const doc = appData.documents.find(d => d.id === id);
  if (doc) {
    showSuccessMessage(`Download iniciado: ${doc.name}`);
  }
}

function deleteDocument(id) {
  if (confirm('Tem certeza que deseja excluir este documento?')) {
    const index = appData.documents.findIndex(d => d.id === id);
    if (index > -1) {
      appData.documents.splice(index, 1);
      showSuccessMessage('Documento excluído com sucesso!');
      loadDocuments();
    }
  }
}

function runAutomation(id) {
  const automation = appData.automations.find(a => a.id === id);
  if (automation) {
    automation.runs++;
    automation.success++;
    showSuccessMessage(`Automação "${automation.name}" executada com sucesso!`);
    loadAutomations();
  }
}

function editAutomation(id) {
  const automation = appData.automations.find(a => a.id === id);
  if (automation) {
    showSuccessMessage(`Função de edição será implementada para: ${automation.name}`);
  }
}

function deleteAutomation(id) {
  if (confirm('Tem certeza que deseja excluir esta automação?')) {
    const index = appData.automations.findIndex(a => a.id === id);
    if (index > -1) {
      appData.automations.splice(index, 1);
      appData.analytics.activeAutomations--;
      showSuccessMessage('Automação excluída com sucesso!');
      loadAutomations();
      if (document.getElementById('dashboard').classList.contains('active')) {
        loadDashboard();
      }
    }
  }
}

// Utility Functions
function getStatusClass(status) {
  switch(status) {
    case 'Pendente': return 'pending';
    case 'Em Andamento': return 'progress';
    case 'Concluído': case 'Validado': case 'Aprovado': return 'completed';
    case 'Em Análise': return 'analysis';
    default: return 'pending';
  }
}

function getPriorityClass(priority) {
  switch(priority) {
    case 'Alta': return 'high';
    case 'Média': return 'medium';
    case 'Baixa': return 'low';
    default: return 'medium';
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR');
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

function showSuccessMessage(message) {
  // Create and show success message
  const successDiv = document.createElement('div');
  successDiv.className = 'success-message';
  successDiv.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
  
  const mainContent = document.querySelector('.main-content');
  mainContent.insertBefore(successDiv, mainContent.firstChild);
  
  // Remove after 3 seconds
  setTimeout(() => {
    successDiv.remove();
  }, 3000);
}

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  loadDashboard();
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      const modalId = e.target.id;
      closeModal(modalId);
    }
    
    // Close header dropdowns when clicking outside
    if (!e.target.closest('.notification-container') && !e.target.closest('.user-menu-container')) {
      closeAllDropdowns();
    }
  });
  
  // Handle keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const openModal = document.querySelector('.modal:not(.hidden)');
      if (openModal) {
        closeModal(openModal.id);
      } else {
        closeAllDropdowns();
      }
    }
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      // Reset mobile sidebar state on desktop
      const sidebar = document.getElementById('sidebar');
      const overlay = document.querySelector('.sidebar-overlay');
      
      sidebar.classList.remove('mobile-open');
      if (overlay) overlay.classList.remove('active');
    }
  });
});