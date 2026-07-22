// ============================================================================
// TIPOS: Estrutura do content.json — versão expandida
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
  descricao?: string;
  email?: string;
  linkedin?: string;
  imagemBase64?: string;
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
  imagensBase64?: string[];
  objetivos?: string[];
}

export interface Capacitacao {
  id: string;
  titulo: string;
  descricao: string;
  cargaHoraria: string;
  data: string;
  local: string;
  vagas: string;
  status: "aberta" | "encerrada" | "em_breve";
  link?: string;
}

export interface ProgramacaoItem {
  horario: string;
  atividade: string;
  descricao: string;
  tipo: string;
}

export interface Palestrante {
  id: string;
  nome: string;
  cargo: string;
  tema: string;
  descricao: string;
  imagemBase64: string;
}

export interface SimposioData {
  titulo: string;
  subtitulo: string;
  data: string;
  horario: string;
  local: string;
  enderecoLocal: string;
  vagas: string;
  vagasLimitadas: boolean;
  descricao: string;
  programacao: ProgramacaoItem[];
  palestrantes: Palestrante[];
  linkInscricao: string;
}

export interface SiteContent {
  instituto: InstitutoInfo;
  numerosImpacto: NumeroImpacto[];
  diretoria: MembroDiretoria[];
  eventosAnuais: EventoAnual[];
  projetos: Projeto[];
  capacitacoes?: Capacitacao[];
  simposio?: SimposioData;
}
