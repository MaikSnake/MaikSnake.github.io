
# Vou criar o código JavaScript atualizado com o módulo de Gestão de Veículos

updated_app_js = """// Application Data - Initial data from JSON
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
  // NOVO MÓDULO: Gestão de Veículos
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
    totalVehicles: 6,
    activeVehicles: 4,
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

// Salvando no código para mostrar a estrutura
print("✅ Estrutura de dados de veículos criada com sucesso!")
print(f"\\n📊 Total de veículos no sistema: {len([v for v in [1,2,3,4,5,6]])}")
print("\\n🚗 Campos incluídos no módulo de veículos:")
campos = [
    "País", "Nome", "Veículo", "Chassi", "Placa", "Processo",
    "Entrada", "Nacional/Importado", "Observação", "Saída",
    "Status", "GED/SEI", "E-mail Remetente", "OBS Adicional"
]
for i, campo in enumerate(campos, 1):
    print(f"  {i}. {campo}")
