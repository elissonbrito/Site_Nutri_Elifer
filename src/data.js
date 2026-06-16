export const WA_LINK = "https://wa.me/5521971516740?text=Oi%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta!";
export const IG_LINK = "https://instagram.com/nutri.elifer";
export const EMAIL = "eliferbrito@hotmail.com";
export const PHONE = "(21) 97151-6740";

export const NAV_LINKS = [
  { id: "sobre",    label: "Sobre" },
  { id: "consulta", label: "Como funciona" },
  { id: "planos",   label: "Planos" },
  { id: "artigos",  label: "Artigos" },
  { id: "contato",  label: "Contato" },
];

export const STEPS = [
  {
    num: "01", icon: "🔍",
    title: "Investigação Inicial (Anamnese)",
    desc: "Conversamos sobre sua rotina, horários, histórico de saúde, exames laboratoriais e suas maiores dificuldades alimentares.",
  },
  {
    num: "02", icon: "⚖️",
    title: "Avaliação Corporal",
    desc: "Análise detalhada da sua composição atual para entendermos o ponto de partida e traçarmos metas reais e alcançáveis.",
  },
  {
    num: "03", icon: "📋",
    title: "Plano Alimentar Individualizado",
    desc: "Calculado especificamente para suas necessidades, respeitando seus gostos, sem restrições severas ou alimentos impossíveis de achar.",
  },
  {
    num: "04", icon: "💬",
    title: "Suporte Especializado",
    desc: "Acompanhamento focado em reeducação alimentar, saúde clínica e suporte seguro para quem faz uso de análogos de GLP-1.",
  },
];

export const PLANS = [
  {
    id: 0,
    name: "Acompanhamento Avulso",
    tag: "Ideal para começar",
    color: "#4A7C59",
    highlight: false,
    items: [
      "1 Consulta Inicial",
      "Avaliação Corporal Completa",
      "Plano Alimentar Individualizado",
      "Suporte via WhatsApp (15 dias)",
    ],
  },
  {
    id: 1,
    name: "Acompanhamento Nutri",
    tag: "Programa 60 Dias",
    color: "#2E5240",
    highlight: true,
    items: [
      "1 Consulta Inicial",
      "1 Retorno Mensal",
      "Monitoramento de 60 dias",
      "Feedback Online a cada 15 dias",
      "Suporte WhatsApp (horário comercial)",
    ],
  },
  {
    id: 2,
    name: "Nutrição e Constância",
    tag: "Programa 90 Dias",
    color: "#C9A84C",
    highlight: false,
    items: [
      "1 Consulta Inicial",
      "2 Retornos Mensais",
      "Monitoramento de 90 dias",
      "Feedback Online a cada 15 dias",
      "Plano de Ação para Progressão",
    ],
  },
];

export const ARTIGOS = [
  {
    tag: "Emagrecimento", emoji: "🍬",
    title: "Por que você sente vontade incontrolável de doce?",
    desc: "A compulsão por doce raramente é falta de força de vontade. Pode ser sinal de refeições desbalanceadas, sono ruim ou resistência à insulina.",
  },
  {
    tag: "Saúde Clínica", emoji: "🩺",
    title: "5 sinais silenciosos de resistência à insulina",
    desc: "Cansaço após refeições, vontade constante de doce e dificuldade de emagrecer mesmo comendo pouco podem indicar que seu metabolismo precisa de atenção.",
  },
  {
    tag: "Dicas Práticas", emoji: "🥚",
    title: "Carboidrato + Proteína: a combinação que sustenta",
    desc: "A combinação certa de macronutrientes reduz a fome, evita o pico de glicemia e mantém energia constante até o jantar.",
  },
  {
    tag: "Mitos", emoji: "❌",
    title: "O que você NÃO precisa para emagrecer",
    desc: "Cortar glúten sem intolerância, eliminar carboidratos à noite, tomar detox de 21 dias. Veja o que a ciência realmente diz.",
  },
  {
    tag: "Equilíbrio", emoji: "⚖️",
    title: "Seu corpo responde melhor ao equilíbrio",
    desc: "Dietas muito restritivas ativam o modo de sobrevivência do organismo, reduzindo o metabolismo e aumentando o risco de reganho.",
  },
  {
    tag: "Receitas", emoji: "🍚",
    title: "Arroz com cúrcuma: anti-inflamatório e saboroso",
    desc: "A curcumina é um poderoso anti-inflamatório natural. Com pimenta-do-reino, a absorção aumenta em até 2000%.",
  },
];

export const DICAS = [
  { emoji: "💧", title: "Hidratação antes da fome",    desc: "Muitas vezes a fome é sede disfarçada. Beba 1 copo d'água antes de comer." },
  { emoji: "🍽️", title: "Prato colorido = completo",  desc: "Quanto mais cores, mais nutrientes e vitaminas você está consumindo." },
  { emoji: "🌙", title: "Sono e emagrecimento",        desc: "Dormir mal eleva o cortisol e aumenta a fome. 7h de sono é meta de saúde." },
  { emoji: "🥦", title: "Fibras reduzem o açúcar",    desc: "Inclua vegetais antes do prato principal para estabilizar a glicemia." },
  { emoji: "⏰", title: "Não pule refeições",          desc: "Pular refeições aumenta o risco de compulsão. Coma a cada 3–4 horas." },
];
