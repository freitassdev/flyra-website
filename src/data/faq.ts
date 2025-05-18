export const faqItems = [
  {
    question: "O que é a Flyra?",
    answer:
      "A Flyra é um grupo focado em integrar tecnologias avançadas para monitorar e prevenir desastres ambientais, especialmente queimadas, utilizando drones com inteligência artificial.",
  },
  {
    question: "Qual o objetivo principal do projeto?",
    answer:
      "Detectar focos de incêndio em tempo real e fornecer dados precisos para auxiliar bombeiros, órgãos ambientais e proprietários rurais na prevenção e combate ao fogo.",
  },
  {
    question: "O projeto está em qual fase?",
    answer:
      "Atualmente, o projeto está em fase de prototipagem, com testes sendo realizados em ambientes simulados.",
  },
  {
    question: "Como o drone detecta os incêndios?",
    answer:
      "Ele utiliza sensores de fumaça, temperatura e umidade, além de inteligência artificial para identificar focos de incêndio com base em dados ambientais e padrões visuais.",
  },
  {
    question: "O drone pode voar em qualquer lugar?",
    answer:
      "Não. Ele não pode entrar em áreas densas sob a copa das árvores, e seu desempenho pode ser afetado por condições climáticas adversas.",
  },
  {
    question: "Quais tecnologias estão sendo usadas?",
    answer:
      "Raspberry Pi 5, sensores de fumaça, temperatura e umidade, GPS, inteligência artificial, e os frameworks FastAPI, NestJS, Electron, React Native e Docker.",
  },
  {
    question: "Quem pode acessar o sistema da Flyra?",
    answer:
      "Organizações credenciadas, como unidades dos Bombeiros ou órgãos ambientais.",
  },
  {
    question: "Quais são os níveis de acesso?",
    answer:
      "Observador, Operador, Supervisor e Administrador. Cada um com permissões específicas para operar e gerenciar os drones e as informações.",
  },
  {
    question: "Preciso de licença para operar o drone?",
    answer:
      "Sim. Operadores precisam ter licença para voar acima de 120 metros ou fora do campo de visão.",
  },
  {
    question: "O sistema funciona offline?",
    answer:
      "O drone possui um backend local que permite funcionamento autônomo. Os dados são sincronizados posteriormente com o sistema central.",
  },
  {
    question: "Como é feita a integração entre as partes do sistema?",
    answer:
      "O sistema é dividido em três partes: backend central (NestJS), backend local no drone (FastAPI) e aplicações cliente (Electron e React Native).",
  },
  {
    question: "O sistema precisa de internet o tempo todo?",
    answer:
      "Para sincronização e comunicação com o backend central, sim. Mas o processamento e a detecção local funcionam de forma autônoma.",
  },
  {
    question: "O drone da Flyra segue as normas legais?",
    answer:
      "Sim. O projeto está sendo desenvolvido de acordo com as normas da ANAC, ANATEL e DECEA, incluindo o Certificado de Autorização de Voo Experimental (CAVE).",
  },
];
