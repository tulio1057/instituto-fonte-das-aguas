// ============================================================================
// TIPOS: Estrutura do content.json
// ============================================================================

export interface InstitutoInfo {
  nome: string;
  slogan: string;
  descricao: string;
  telefone: string;
  whatsapp: string;
  email: string;
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  pix: string;
  instagram: string;
  instagramUrl: string;
}

export interface NumeroImpacto {
  numero: string;
  descricao: string;
}

export interface MembroDiretoria {
  id: number;
  nome: string;
  cargo: string;
}

export interface EventoAnual {
  nome: string;
  mes: string;
  descricao: string;
}

export interface Projeto {
  id: string;
  titulo: string;
  descricaoCurta: string;
  descricaoLonga: string;
  impacto: string;
  frente: string;
}

export interface SiteContent {
  instituto: InstitutoInfo;
  numerosImpacto: NumeroImpacto[];
  diretoria: MembroDiretoria[];
  eventosAnuais: EventoAnual[];
  projetos: Projeto[];
}
