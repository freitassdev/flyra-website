export enum EUserRole {
  ORG_ADMIN = "ORG_ADMIN",
  ORG_OPERATOR = "ORG_OPERATOR",
  ORG_OBSERVER = "ORG_OBSERVER",
  SYSTEM_ADMIN = "SYSTEM_ADMIN",
}

// Administrador da Organização:

// - Gerencia os usuários da sua organização (criar, editar, remover).
// - Configura os drones vinculados à organização.
// - Acessa relatórios e histórico de alertas.

// Operador:
// - Monitora o sistema em tempo real.
// - Recebe e responde a alertas.
// - Configura rotas ou tarefas dos drones (se permitido).

// Observador:
// - Visualiza alertas, relatórios e transmissões ao vivo.
// -   Não tem acesso a configurações ou comandos.
