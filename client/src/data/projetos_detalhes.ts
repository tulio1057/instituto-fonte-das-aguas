// ============================================================================
// DADOS DOS PROJETOS - INSTITUTO FONTE DAS ÁGUAS
// ============================================================================
// Este arquivo centraliza todas as informações estruturadas dos 13 projetos
// do Instituto Fonte das Águas, facilitando manutenção e exibição dinâmica.

export interface ProjetoDetalhe {
  id: string;
  titulo: string;
  descricaoCurta: string;
  descricaoLonga: string;
  objetivos: string[];
  fotos: string[];
  impacto?: string;
  icone?: string;
  frente: string; // ID da frente a que pertence
}

export const PROJETOS_DETALHES: ProjetoDetalhe[] = [
  {
    id: "mamae-na-fonte",
    titulo: "Mamãe na Fonte",
    descricaoCurta: "Suporte integral para gestantes, lactantes e mães com orientações nutricionais e acompanhamento emocional.",
    descricaoLonga: "O projeto Mamãe na Fonte oferece suporte integral para gestantes, lactantes e mães com acompanhamento nutricional, emocional e orientações para o desenvolvimento saudável de bebês e crianças. Através de uma abordagem humanizada, conecta as mães com redes de assistência, cuidado pré-natal e pós-natal.",
    objetivos: [
      "Acompanhamento nutricional de gestantes e lactantes",
      "Orientações e educação em saúde materna",
      "Suporte emocional durante a maternidade",
      "Conexão com redes de assistência social",
      "Promoção do aleitamento materno"
    ],
    fotos: [
      "https://images.unsplash.com/photo-1488521787991-ed7fe863a405?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
    ],
    impacto: "Centenas de mães acompanhadas mensalmente com suporte contínuo.",
    icone: "Heart",
    frente: "vinculos-bem-estar"
  },
  {
    id: "celebre",
    titulo: "CELEBRE",
    descricaoCurta: "Celebração de feminilidade, empoderamento e cuidado com atividades de estética, saúde e valorização da mulher.",
    descricaoLonga: "O projeto CELEBRE é um espaço de celebração e empoderamento feminino que promove autoestima, cuidado com a saúde e valorização da mulher como protagonista. Através de atividades de estética, workshops de bem-estar e rodas de conversa, cria um ambiente seguro para o desenvolvimento pessoal e social das mulheres da comunidade.",
    objetivos: [
      "Promover autoestima e confiança feminina",
      "Oferecer atividades de estética e bem-estar",
      "Criar espaço de fala e empoderamento",
      "Abordar temas de saúde e sexualidade",
      "Valorizar a mulher como agente de mudança"
    ],
    fotos: [
      "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1531983200157-6c26b5ce36eb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop"
    ],
    impacto: "Mais de 100 mulheres participantes com impacto significativo em autoestima.",
    icone: "Sparkles",
    frente: "vinculos-bem-estar"
  },
  {
    id: "atendimento-nutricional",
    titulo: "Atendimento Nutricional",
    descricaoCurta: "Avaliação nutricional, orientações alimentares e planos customizados para saúde e bem-estar.",
    descricaoLonga: "O projeto de Atendimento Nutricional oferece avaliações individualizadas, diagnóstico de estado nutricional e orientações alimentares personalizadas. Profissionais especializados trabalham com crianças, adolescentes, gestantes e famílias para promover hábitos saudáveis e prevenir doenças nutricionais.",
    objetivos: [
      "Avaliar estado nutricional de beneficiários",
      "Elaborar planos alimentares customizados",
      "Orientar sobre alimentação saudável",
      "Prevenir desnutrição e doenças nutricionais",
      "Educar famílias sobre nutrição"
    ],
    fotos: [
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574484284002-952f3c37b937?w=800&h=600&fit=crop"
    ],
    impacto: "Centenas de avaliações nutricionais realizadas com melhoria significativa nos indicadores de saúde.",
    icone: "Apple",
    frente: "vinculos-bem-estar"
  },
  {
    id: "atendimento-psicologico",
    titulo: "Atendimento Psicológico",
    descricaoCurta: "Acompanhamento psicológico para crianças, adolescentes e famílias como espaço seguro para processamento emocional.",
    descricaoLonga: "O projeto oferece acompanhamento psicológico profissional em um espaço acolhedor e seguro. Através de sessões individuais e em grupo, atende crianças, adolescentes e famílias, promovendo saúde mental, resiliência e processamento de traumas.",
    objetivos: [
      "Oferecer espaço seguro para expressão emocional",
      "Acompanhar crianças e adolescentes em desenvolvimento",
      "Apoiar famílias em situações de vulnerabilidade",
      "Identificar e intervir em traumas",
      "Fortalecer vínculos e habilidades socioemocionais"
    ],
    fotos: [
      "https://images.unsplash.com/photo-1516534775068-bb57b6a48e71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552508744-0d6aecfe1a1f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1620591092169-e7b06a1b21c9?w=800&h=600&fit=crop"
    ],
    impacto: "Dezenas de atendimentos mensais com significativa melhoria em saúde mental.",
    icone: "Brain",
    frente: "vinculos-bem-estar"
  },
  {
    id: "consultoria-juridica",
    titulo: "Consultoria Jurídica",
    descricaoCurta: "Orientações jurídicas e apoio na documentação com garantia de direitos e cidadania.",
    descricaoLonga: "O projeto de Consultoria Jurídica oferece orientações legais gratuitas e apoio para regularização de documentação. Visa garantir acesso a direitos fundamentais, cidadania plena e proteção legal para famílias vulneráveis.",
    objetivos: [
      "Orientar sobre direitos fundamentais",
      "Auxiliar na regularização de documentação",
      "Apoiar em questões de pensão e guarda",
      "Orientar sobre direitos trabalhistas",
      "Garantir acesso à justiça"
    ],
    fotos: [
      "https://images.unsplash.com/photo-1526480802860-a206995ceba0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507537362392-54f4994424b4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=800&h=600&fit=crop"
    ],
    impacto: "Centenas de orientações jurídicas fornecidas com sucesso na regularização.",
    icone: "Scale",
    frente: "vinculos-bem-estar"
  },
  {
    id: "mesa-da-vida",
    titulo: "Mesa da Vida",
    descricaoCurta: "Segurança alimentar e partilha comunitária com distribuição de refeições e cestas básicas.",
    descricaoLonga: "O projeto Mesa da Vida combate a insegurança alimentar através da distribuição de alimentos, refeições prontas e cestas básicas para famílias em situação de vulnerabilidade. Mobiliza doações, voluntariado e promove alimentação digna e segura.",
    objetivos: [
      "Distribuir cestas básicas e alimentos",
      "Oferecer refeições prontas nutritivas",
      "Combater insegurança alimentar aguda",
      "Mobilizar doações de alimentos",
      "Promover segurança alimentar sustentável"
    ],
    fotos: [
      "https://images.unsplash.com/photo-1488521787991-ed7fe863a405?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7fe863a405?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566241440228-c56103dba8e1?w=800&h=600&fit=crop"
    ],
    impacto: "Toneladas de alimentos distribuídos anualmente para famílias necessitadas.",
    icone: "Package",
    frente: "nutricao-dignidade"
  },
  {
    id: "bola-pra-frente",
    titulo: "Bola pra Frente",
    descricaoCurta: "Futebol como ferramenta de inclusão, disciplina e desenvolvimento para crianças e adolescentes.",
    descricaoLonga: "O projeto Bola pra Frente utiliza o futebol como ferramenta pedagógica para desenvolver crianças e adolescentes. Através do esporte, promove inclusão social, disciplina, trabalho em equipe, respeito e cidadania.",
    objetivos: [
      "Oferecer atividades de futebol inclusivas",
      "Desenvolver disciplina e responsabilidade",
      "Promover trabalho em equipe e respeito",
      "Ocupar tempo livre de forma construtiva",
      "Estimular sonhos e perspectivas futuras"
    ],
    fotos: [
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1579999157595-84f79b6af7df?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560708537-0fcab0de5f64?w=800&h=600&fit=crop"
    ],
    impacto: "Dezenas de crianças e adolescentes participando regularmente.",
    icone: "Zap",
    frente: "inclusao-esporte"
  },
  {
    id: "tatame-da-vida",
    titulo: "Tatame da Vida",
    descricaoCurta: "Jiu-Jitsu para desenvolvimento de disciplina, respeito e autoconfiança com alunos em formação.",
    descricaoLonga: "O projeto Tatame da Vida oferece aulas de jiu-jitsu para crianças e adolescentes, promovendo desenvolvimento de disciplina, respeito, autoconfiança e valores como honra e persistência. Em 2024, formou 24 alunos certificados.",
    objetivos: [
      "Ensinar técnicas de jiu-jitsu",
      "Desenvolver disciplina e foco",
      "Promover autodefesa e segurança",
      "Fortalecer autoconfiança e autoestima",
      "Formar alunos com certificação"
    ],
    fotos: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549720365-8fb539306e20?w=800&h=600&fit=crop"
    ],
    impacto: "24 alunos formados em 2024 com certificação em jiu-jitsu.",
    icone: "Zap",
    frente: "inclusao-esporte"
  },
  {
    id: "vida-em-movimento",
    titulo: "Vida em Movimento",
    descricaoCurta: "Programa integrado de esportes (Ballet, Capoeira) e desenvolvimento pessoal de crianças e adolescentes.",
    descricaoLonga: "O projeto Vida em Movimento oferece um programa integrado combinando ballet, capoeira, educação e desenvolvimento pessoal. Cria um espaço de expressão artística, movimento corporal e crescimento integral.",
    objetivos: [
      "Oferecer aulas de ballet e capoeira",
      "Promover expressão artística e corporal",
      "Desenvolver coordenação e ritmo",
      "Fortalecer autoconfiança através da arte",
      "Ampliar horizontes culturais"
    ],
    fotos: [
      "https://images.unsplash.com/photo-1504942898657-b5c2b09d2e6f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526401485004-46910557345b?w=800&h=600&fit=crop"
    ],
    impacto: "Centenas de participantes nos programa artístico e esportivo.",
    icone: "Music",
    frente: "inclusao-esporte"
  },
  {
    id: "juntos-pela-infancia",
    titulo: "Juntos pela Infância Segura",
    descricaoCurta: "Proteção integral da infância com acompanhamento, orientação e rede de proteção.",
    descricaoLonga: "O projeto Juntos pela Infância Segura atua na proteção integral de crianças e adolescentes. Trabalha na identificação de vulnerabilidades, acompanhamento personalizado, orientação familiar e articulação com redes de proteção social.",
    objetivos: [
      "Proteger direitos da criança e adolescente",
      "Identificar situações de vulnerabilidade",
      "Realizar acompanhamento personalizado",
      "Articular com redes de proteção",
      "Orientar famílias e cuidadores"
    ],
    fotos: [
      "https://images.unsplash.com/photo-1503228311503-e5500d963ad9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b2e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
    ],
    impacto: "Centenas de crianças sob proteção integral e acompanhamento.",
    icone: "Shield",
    frente: "proteja-infancia"
  },
  {
    id: "campanhas-conscientizacao",
    titulo: "Campanhas de Conscientização",
    descricaoCurta: "Campanhas educativas sobre direitos infantis, abuso, exploração e direitos fundamentais.",
    descricaoLonga: "O projeto de Campanhas de Conscientização realiza ações educativas contínuas sobre direitos da criança, prevenção de abuso e exploração. Mobiliza comunidade, escolas e redes para a proteção integral da infância.",
    objetivos: [
      "Conscientizar sobre direitos das crianças",
      "Prevenir abuso e exploração infantil",
      "Educar sobre direitos fundamentais",
      "Mobilizar comunidade na proteção",
      "Ampliar conhecimento sobre legislação"
    ],
    fotos: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552678206-52ff3d6e1b75?w=800&h=600&fit=crop"
    ],
    impacto: "Milhares de pessoas impactadas pelos campanhas de conscientização.",
    icone: "AlertCircle",
    frente: "proteja-infancia"
  },
  {
    id: "fonte-educa",
    titulo: "Fonte Educa",
    descricaoCurta: "Reforço escolar, apoio pedagógico e ensino de línguas estrangeiras para ampliação de oportunidades.",
    descricaoLonga: "O projeto Fonte Educa oferece reforço escolar, apoio pedagógico individualizado e ensino de idiomas (inglês, espanhol). Visa ampliar oportunidades educacionais e desenvolver competências para o futuro.",
    objetivos: [
      "Oferecer reforço em disciplinas principais",
      "Apoiar desenvolvimento escolar",
      "Ensinar idiomas estrangeiros",
      "Ampliar oportunidades educacionais",
      "Preparar para desafios futuros"
    ],
    fotos: [
      "https://images.unsplash.com/photo-1427504494785-a8f89f32c2e5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop"
    ],
    impacto: "Dezenas de alunos com melhoria comprovada em desempenho escolar.",
    icone: "BookOpen",
    frente: "vinculos-bem-estar"
  },
  {
    id: "visao-da-vida",
    titulo: "Visão da Vida",
    descricaoCurta: "Saúde visual com realização de exames de vista e distribuição de óculos.",
    descricaoLonga: "O projeto Visão da Vida realiza triagens de saúde visual, aviação oftalmológica e distribuição de óculos para crianças, adolescentes e famílias. Garante acesso ao cuidado oftalmológico como direito fundamental.",
    objetivos: [
      "Realizar exames de vista",
      "Distribuir óculos necessários",
      "Encaminhar para oftalmologista",
      "Prevenir problemas visuais",
      "Garantir direito à saúde visual"
    ],
    fotos: [
      "https://images.unsplash.com/photo-1525318897962-96cd6c08dc9d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1533886275381-c0073f0e82c2?w=800&h=600&fit=crop"
    ],
    impacto: "Centenas de pessoas com acesso a cuidado oftalmológico e óculos.",
    icone: "Eye",
    frente: "vinculos-bem-estar"
  }
];
