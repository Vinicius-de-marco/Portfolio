// Todo o conteúdo do portfólio fica aqui — edite este arquivo para atualizar o site.

export const profile = {
  name: 'Vinicius De Marco',
  fullName: 'Vinicius De Marco Rodrigues',
  role: 'Desenvolvedor Full Stack',
  rotating: ['interfaces', 'APIs', 'bancos de dados', 'soluções com dados'],
  intro:
    'Estudante de Ciência da Computação na UNISUL. Desenvolvo aplicações web completas — da interface ao banco de dados — com foco em código limpo e bem estruturado.',
  email: 'viniciusdemarco7@gmail.com',
  github: 'https://github.com/Vinicius-de-marco',
  linkedin: 'https://www.linkedin.com/in/vinicius-de-marco-rodrigues-039002384/',
  resume: 'arquivos/vinicius-de-marco-rodrigues.pdf',
}

export const skills = [
  {
    title: 'Front-end',
    description: 'Interfaces responsivas, componentizadas e acessíveis, com foco em performance e experiência do usuário.',
    tags: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind'],
  },
  {
    title: 'Back-end',
    description: 'APIs RESTful, autenticação, middlewares e integração com serviços externos.',
    tags: ['Node.js', 'Express', 'REST API', 'Python'],
  },
  {
    title: 'Banco de dados',
    description: 'Modelagem, consultas otimizadas e manutenção de bancos relacionais e não relacionais.',
    tags: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
  },
  {
    title: 'Ferramentas',
    description: 'Versionamento e boas práticas para entregar código limpo em times ágeis.',
    tags: ['Git', 'Linux', 'Scrum'],
  },
]

export const projects = [
  {
    title: 'InergiaE',
    description:
      'Site institucional para uma empresa de conversores estáticos, com informações sobre produtos, serviços e contato. Construído em HTML simples para que o próprio cliente consiga editar o conteúdo sem suporte.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/Vinicius-de-marco/InergiaE',
    demo: 'https://inergiae.com.br/',
  },
  {
    title: 'Gerenciador de tarefas',
    description:
      'Aplicação full stack com autenticação de usuários e criação, edição e exclusão de tarefas, com interface limpa e responsiva.',
    stack: ['React', 'Node.js', 'Express', 'SQLite'],
    repo: 'https://github.com/Vinicius-de-marco/Gerenciatarefa',
  },
  {
    title: 'Anti Distração',
    description:
      'Software em Python que usa a webcam para detectar quando o usuário desvia o olhar da tela. Após 5 segundos de distração, exibe um aviso que só desaparece quando o foco volta.',
    stack: ['Python'],
    repo: 'https://github.com/Vinicius-de-marco/antidistracao',
  },
]

export const certifications = [
  {
    year: '2026',
    title: 'Python para análise e automação de dados',
    issuer: 'DIO',
    description: 'Análise de dados, automação de tarefas e integração com APIs usando Pandas, NumPy e Requests.',
  },
  {
    year: '2024',
    title: 'Técnico em Análise e Desenvolvimento de Sistemas',
    issuer: 'SENAI/SC',
    description: 'Curso técnico de 2 anos: lógica de programação, banco de dados, desenvolvimento web e boas práticas.',
  },
  {
    year: '2024',
    title: 'Uso da tecnologia na produção musical',
    issuer: 'Mast Music Academy Bari',
    description: 'Gravação, mixagem, masterização e criação de plugins de áudio em C++.',
  },
  {
    year: '2023',
    title: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    description: 'Sintaxe, estruturas de dados, controle de fluxo e fundamentos de orientação a objetos.',
  },
]

export const about = {
  paragraphs: [
    'Me chamo Vinicius e gosto de entender profundamente o problema antes de escrever a primeira linha de código. Meu foco é construir aplicações web modernas, bem estruturadas e fáceis de manter.',
    'Atualmente curso Ciência da Computação e estudo boas práticas para crescer com consistência na carreira. Estou sempre aberto a aprender com times experientes.',
    'Fora do teclado: música e café.',
  ],
  facts: [
    { label: 'Formação', value: 'Ciência da Computação — UNISUL' },
    { label: 'Estudando', value: 'Clean Code, System Design, Testes' },
    { label: 'Idiomas', value: 'Português (nativo), Inglês (intermediário)' },
    { label: 'Status', value: 'Disponível para oportunidades' },
  ],
}
