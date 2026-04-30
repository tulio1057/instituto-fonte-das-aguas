// ============================================================================
// FALLBACK: valores do config.ts original
// ============================================================================
// Usado pelo useContent quando a API não responde (ex: modo dev sem servidor).
// Mantém compatibilidade total com os dados já existentes.

import type { SiteContent } from "./contentTypes";

export const CONTENT_FALLBACK: SiteContent = {
  instituto: {
    nome: "Instituto Fonte das Águas",
    slogan: "Dignidade humana e justiça social",
    descricao:
      "Transformando vidas no Bairro Industrial por meio do amor, da educação e do cuidado com crianças, famílias e comunidades vulneráveis.",
    telefone: "(79) 9 9143-9647",
    whatsapp: "5579996402118",
    email: "",
    endereco: "Rua Adezinho da Costa Pinto, 149",
    bairro: "Bairro Industrial",
    cidade: "Aracaju",
    estado: "SE",
    cep: "49065-010",
    pix: "52250050000120",
    instagram: "@instituto.fontedasaguas",
    instagramUrl: "https://instagram.com/instituto.fontedasaguas",
  },
  numerosImpacto: [
    { numero: "~40",  descricao: "Voluntários" },
    { numero: "~50",  descricao: "Famílias" },
    { numero: "67",   descricao: "Crianças/Adolescentes" },
    { numero: "300+", descricao: "Vidas Impactadas" },
    { numero: "4",    descricao: "Toneladas alimentos" },
    { numero: "40",   descricao: "Exames de saúde" },
    { numero: "80%",  descricao: "Taxa retenção" },
    { numero: "11",   descricao: "Projetos Ativos" },
  ],
  diretoria: [
    { id: 1, nome: "Felipe Rocha",     cargo: "Presidente" },
    { id: 2, nome: "Diogo Rian",       cargo: "Vice-Presidente" },
    { id: 3, nome: "Kelly Furtuoso",   cargo: "1º Tesoureiro" },
    { id: 4, nome: "Rick Vieira",      cargo: "2º Tesoureiro" },
    { id: 5, nome: "Katiane Furtuoso", cargo: "1º Secretária" },
    { id: 6, nome: "Dayvisson Fontes", cargo: "2º Secretário" },
  ],
  eventosAnuais: [
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
  ],
  projetos: [
    {
      id: "mamae-na-fonte",
      titulo: "Mamãe na Fonte",
      descricaoCurta: "Cuidado integral para mulheres em todas as fases da maternidade e da vida.",
      descricaoLonga:
        "O projeto Mamãe na Fonte atua no cuidado integral de mulheres, oferecendo suporte físico, emocional e social para gestantes, lactantes e mães.",
      impacto: "Mulheres acompanhadas de forma contínua, com acesso a cuidado, informação e acolhimento.",
      frente: "vinculos-bem-estar",
    },
    {
      id: "celebre",
      titulo: "Celebre",
      descricaoCurta: "Celebração inclusiva e solidária de aniversários para crianças com poucos recursos.",
      descricaoLonga:
        "O projeto Celebre celebra datas especiais de crianças da comunidade, garantindo que todas tenham uma festa memorável.",
      impacto: "Centenas de crianças com aniversários celebrados dignamente.",
      frente: "vinculos-bem-estar",
    },
  ],
};
