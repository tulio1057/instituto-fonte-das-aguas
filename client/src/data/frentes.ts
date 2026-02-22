// ============================================================================
// DADOS DAS FRENTES - INSTITUTO FONTE DAS ÁGUAS
// ============================================================================
// Este arquivo centraliza as 4 frentes de atuação principais do Instituto,
// organizando e descrevendo o propósito de cada uma.

export interface Frente {
  id: string;
  numero: number;
  titulo: string;
  descricao: string;
  descricaoLonga: string;
  icone: string;
  cor: string; // classe de cor para aplicar ao design
}

export const FRENTES: Frente[] = [
  {
    id: "vinculos-bem-estar",
    numero: 1,
    titulo: "Vínculos para o Bem-Estar",
    descricao: "Fortalecimento de relações humanas e cuidado integral",
    descricaoLonga: "Esta frente é dedicada ao fortalecimento dos vínculos familiares e comunitários, oferecendo suporte integral que passa por diferentes aspectos do bem-estar: nutricional, psicológico, jurídico e emocional. Acreditamos que pessoas com vínculos fortes e apoio adequado conseguem superar desafios com mais resiliência.",
    icone: "Heart",
    cor: "primary"
  },
  {
    id: "nutricao-dignidade",
    numero: 2,
    titulo: "Nutrição e Dignidade",
    descricao: "Segurança alimentar e promoção da dignidade humana",
    descricaoLonga: "A segurança alimentar é um direito fundamental. Esta frente trabalha para garantir que crianças, adolescentes e famílias tenham acesso a refeições nutritivas e tenham também a oportunidade de celebrar momentos de partilha comunitária.",
    icone: "Users",
    cor: "secondary"
  },
  {
    id: "inclusao-esporte",
    numero: 3,
    titulo: "Inclusão pelo Esporte",
    descricao: "O esporte como ferramenta de transformação social",
    descricaoLonga: "O esporte é um poderoso agente de transformação. Esta frente utiliza diferentes modalidades esportivas para promover inclusão, desenvolvimento de habilidades, disciplina, confiança e oportunidades para crianças e adolescentes.",
    icone: "Target",
    cor: "accent"
  },
  {
    id: "proteja-infancia",
    numero: 4,
    titulo: "Proteja a Infância",
    descricao: "Proteção e conscientização sobre direitos infantis",
    descricaoLonga: "Proteger a infância é um compromisso inalienável. Esta frente trabalha na prevenção e no acompanhamento de vulnerabilidades, promovendo consciência sobre direitos das crianças e adolescentes, além de apoiar vítimas de violência e abuso.",
    icone: "Shield",
    cor: "primary"
  }
];
