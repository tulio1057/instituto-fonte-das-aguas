// ============================================================================
// CONSTANTES GLOBAIS DA APLICAÇÃO
// ============================================================================
// Este arquivo centraliza todas as constantes usadas no site para facilitar
// manutenção e consistência em toda a aplicação.

// ============================================================================
// INFORMAÇÕES INSTITUCIONAIS
// ============================================================================

export const INSTITUTO_INFO = {
  nome: "Instituto Fonte das Águas",
  slogan: "Dignidade humana e justiça social",
  descricao: "Transformando vidas no Bairro Industrial por meio do amor, da educação e do cuidado com crianças, famílias e comunidades vulneráveis.",
  
  // Contato
  telefone: "(79) 9 9143-9647",
  whatsapp: "5579996402118",
  email: "",
  
  // Localização
  endereco: "Rua Adezinho da Costa Pinto, 149",
  bairro: "Bairro Industrial",
  cidade: "Aracaju",
  estado: "SE",
  cep: "49065-010",
  
  // PIX
  pix: "52250050000120",
  instituicao: "INSTITUTO FONTE DAS ÁGUAS-IFA",
  
  // Redes Sociais
  instagram: "@instituto.fontedasaguas",
  instagramUrl: "https://instagram.com/instituto.fontedasaguas",
};

// ============================================================================
// ROTAS DA APLICAÇÃO
// ============================================================================

export const ROUTES = {
  home: "/",
  sobre: "/sobre",
  diretoria: "/diretoria",
  voluntarios: "/voluntarios",
  projetos: "/projetos",
  eventos: "/eventos",
  comoAjudar: "/como-ajudar",
  doar: "/doar",
  contato: "/contato",
  transparencia: "/transparencia",
  capacitacoes: "/capacitacoes",
  simposio: "/simposio",
  notFound: "/404",
};

// ============================================================================
// ITENS DE NAVEGAÇÃO
// ============================================================================

export const NAV_PRIMARY_ITEMS = [
  { name: "Início", path: ROUTES.home },
  { name: "Sobre Nós", path: ROUTES.sobre },
  { name: "Projetos", path: ROUTES.projetos },
];

export const NAV_SECONDARY_ITEMS = [
  { name: "Diretoria", path: ROUTES.diretoria },
  { name: "Eventos", path: ROUTES.eventos },
  { name: "Voluntários", path: ROUTES.voluntarios },
  { name: "Capacitações", path: ROUTES.capacitacoes },
  { name: "Simpósio", path: ROUTES.simposio },
  { name: "Transparência", path: ROUTES.transparencia },
];

// ============================================================================
// DADOS DA DIRETORIA
// ============================================================================

export const DIRETORIA = [
  { id: 1, nome: "Felipe Rocha", cargo: "Presidente" },
  { id: 2, nome: "Diogo Rian", cargo: "Vice-Presidente" },
  { id: 3, nome: "Kelly Furtuoso", cargo: "1º Tesoureiro" },
  { id: 4, nome: "Rick Vieira", cargo: "2º Tesoureiro" },
  { id: 5, nome: "Katiane Furtuoso", cargo: "1º Secretária" },
  { id: 6, nome: "Dayvisson Fontes", cargo: "2º Secretário" },
];

// ============================================================================
// NÚMEROS DE IMPACTO
// ============================================================================

export const NUMEROS_IMPACTO = [
  { numero: "~40", descricao: "Voluntários", icon: "Users" },
  { numero: "~50", descricao: "Famílias", icon: "Home" },
  { numero: "67", descricao: "Crianças/Adolescentes", icon: "Users" },
  { numero: "300+", descricao: "Vidas Impactadas", icon: "Heart" },
  { numero: "4", descricao: "Toneladas alimentos", icon: "Package" },
  { numero: "40", descricao: "Exames de saúde", icon: "Stethoscope" },
  { numero: "80%", descricao: "Taxa retenção", icon: "TrendingUp" },
  { numero: "11", descricao: "Projetos Ativos", icon: "Target" },
];

// ============================================================================
// PASSOS DO VOLUNTARIADO
// ============================================================================

export const TRILHA_VOLUNTARIO = [
  { numero: 1, nome: "Demonstração de Interesse", descricao: "Manifeste seu desejo de fazer parte do nosso time" },
  { numero: 2, nome: "Preenchimento de Formulário", descricao: "Preencha dados pessoais e de interesse" },
  { numero: 3, nome: "Entrevista com RH", descricao: "Conversa com a equipe de recursos humanos" },
  { numero: 4, nome: "Participação de Capacitação", descricao: "Treinamento sobre processos e valores" },
  { numero: 5, nome: "Direcionamento ao Projeto", descricao: "Alocação em projeto alinhado com seus interesses" },
  { numero: 6, nome: "Assinatura de Termo de Adesão", descricao: "Formalização do compromisso voluntário" },
];

// ============================================================================
// EVENTOS ANUAIS
// ============================================================================

export const EVENTOS_ANUAIS = [
  {
    nome: "Paz.coa",
    mes: "Páscoa",
    descricao: "Celebração e atividades de Páscoa com a comunidade",
  },
  {
    nome: "Natal na Fonte",
    mes: "Dezembro",
    descricao: "Festividades natalinas com distribuição de presentes",
  },
  {
    nome: "Criança na Fonte",
    mes: "Anual",
    descricao: "Celebração do dia da criança com diversas atividades",
  },
];

// ============================================================================
// TEMAS DISPONÍVEIS
// ============================================================================

export const THEMES = {
  light: "light",
  dark: "dark",
} as const;

// ============================================================================
// CONFIGURAÇÕES DE UI
// ============================================================================

export const UI_CONFIG = {
  animationDuration: 300,
  mobileBreakpoint: 768,
  tabletBreakpoint: 1024,
};
