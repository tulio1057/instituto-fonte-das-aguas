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
    descricaoCurta: "Cuidado integral para mulheres em todas as fases da maternidade e da vida.",
    descricaoLonga: "O projeto Mamãe na Fonte atua no cuidado integral de mulheres, oferecendo suporte físico, emocional e social para gestantes, lactantes e mães. Com uma abordagem humanizada, o projeto promove espaços de escuta, orientação e acolhimento, abordando temas essenciais como saúde mental, autocuidado e fortalecimento feminino. Além disso, conecta as participantes a redes de apoio e serviços que contribuem para uma vida mais digna e saudável.",
    objetivos: [
      "Promover palestras e encontros sobre saúde emocional, incluindo temas como ansiedade e depressão",
      "Garantir acesso a exames de saúde íntima e ações preventivas voltadas à saúde da mulher",
      "Oferecer suporte emocional e acolhimento em situações de vulnerabilidade, como luto e violência doméstica",
      "Fortalecer vínculos e redes de apoio entre mulheres",
      "Incentivar o cuidado integral, considerando corpo, mente e contexto social"
    ],
    fotos: [
      "/mamaenafonte1.jpeg",
      "/mamaenafonte2.jpeg"
    ],
    impacto: "Mulheres acompanhadas de forma contínua, com acesso a cuidado, informação e acolhimento, promovendo transformação real em suas histórias e territórios.",
    icone: "Heart",
    frente: "vinculos-bem-estar"
  },
  {
    id: "celebre",
    titulo: "Aniversário Solidário",
    descricaoCurta: "Celebração inclusiva e solidária de aniversários para crianças que têm poucos recursos, promovendo alegria, dignidade e pertencimento.",
    descricaoLonga: "O projeto Aniversário Solidário celebra datas especiais de crianças da comunidade, garantindo que todas tenham uma festa memorável. Promove inclusão, dignidade e alegria através de celebrações acessíveis, criando momentos de pertencimento e confiança nas crianças e adolescentes.",
    objetivos: [
      "Celebrar aniversários de crianças de forma digna",
      "Promover inclusão e pertencimento",
      "Criar momentos de alegria e alegramento",
      "Fortalecer autoestima e valorização pessoal",
      "Mobilizar comunidade em ações solidárias"
    ],
    fotos: [
      "/celebre1.jpeg",
      "/celebre2.jpeg"
    ],
    impacto: "Centenas de crianças com aniversários celebrados dignamente e memoráveis.",
    icone: "Gift",
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
      "/mesadavida1.jpeg",
      "/mesadavida2.jpeg"
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
      "/futebol1.jpg",
      "/futebol2.jpg"
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
      "/tatame1.jpeg",
      "/tatame2.jpeg"
    ],
    impacto: "24 alunos formados em 2024 com certificação em jiu-jitsu.",
    icone: "Zap",
    frente: "inclusao-esporte"
  },
  {
    id: "vida-em-movimento",
    titulo: "Vida em Movimento",
    descricaoCurta: "Programa de dança e expressão corporal para o desenvolvimento de crianças e adolescentes.",
    descricaoLonga: "O projeto Vida em Movimento é dedicado à formação de crianças e adolescentes por meio da dança, com foco principal no ballet e em outros estilos musicais. A iniciativa promove um espaço de expressão artística, disciplina e desenvolvimento integral, utilizando o movimento como ferramenta de formação pessoal, sensibilidade cultural e fortalecimento da autoestima.",
    objetivos: [
      "Oferecer aulas de ballet e outros estilos de dança",
      "Estimular a expressão corporal e artística",
      "Desenvolver coordenação, ritmo e consciência corporal",
      "Fortalecer a autoconfiança e a disciplina",
      "Ampliar o repertório cultural por meio da dança"
    ],
    fotos: [
      "/ballet.jpg",
      "/ballet2.jpg"
    ],
    impacto: "Crianças e adolescentes atendidos continuamente, desenvolvendo habilidades artísticas, emocionais e sociais por meio da dança.",
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
      "/infancia (1).jpeg",
      "/infancia (2).jpeg"
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
      "/conversa (1).jpeg",
      "/conversa (2).jpeg"
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
    fotos: [],
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
      "/visaodavida1.jpeg",
      "/visaodavida2.jpeg"
    ],
    impacto: "Centenas de pessoas com acesso a cuidado oftalmológico e óculos.",
    icone: "Eye",
    frente: "vinculos-bem-estar"
  }
];
