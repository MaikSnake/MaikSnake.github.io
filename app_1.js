// Application Data - Initial data from JSON
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

// Charts instances
let statusChart, monthlyChart, typeChart;

// DOM Elements
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const pages = document.querySelectorAll('.page');

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
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  
  // Load page-specific content
  switch(pageId) {
    case 'dashboard':
      loadDashboard();
      break;
    case 'processes':
      loadProcesses();
      break;
    case 'documents':
      loadDocuments();
      break;
    case 'automations':
      loadAutomations();
      break;
    case 'analytics':
      loadAnalytics();
      break;
    case 'settings':
      loadSettings();
      break;
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