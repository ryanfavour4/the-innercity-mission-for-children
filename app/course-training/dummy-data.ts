export const courses = [
  {
    _id: 'course_frontend',
    title: 'Frontend Development',
    description: 'Build modern user interfaces',
  },
  {
    _id: 'course_backend',
    title: 'Backend Development',
    description: 'APIs, servers, and databases',
  },
  {
    _id: 'course_uiux',
    title: 'UI / UX Design',
    description: 'Design usable and beautiful products',
  },
]

export const classes = [
  // Frontend
  { _id: 'class_html', courseId: 'course_frontend', title: 'HTML Fundamentals' },
  { _id: 'class_css', courseId: 'course_frontend', title: 'CSS Basics' },
  { _id: 'class_react', courseId: 'course_frontend', title: 'React Introduction' },

  // Backend
  { _id: 'class_node', courseId: 'course_backend', title: 'Node.js Basics' },
  { _id: 'class_api', courseId: 'course_backend', title: 'REST APIs' },
  { _id: 'class_db', courseId: 'course_backend', title: 'Databases' },

  // UI/UX
  { _id: 'class_design', courseId: 'course_uiux', title: 'Design Principles' },
  { _id: 'class_research', courseId: 'course_uiux', title: 'User Research' },
  { _id: 'class_prototype', courseId: 'course_uiux', title: 'Prototyping' },
]

export const questions = [
  // HTML
  {
    _id: 'q_html_1',
    classId: 'class_html',
    question: 'HTML stands for?',
    options: ['HyperText Markup Language', 'HighText ML', 'Hyper Tool ML'],
    correctAnswer: 0,
  },
  {
    _id: 'q_html_2',
    classId: 'class_html',
    question: 'Which tag creates a heading?',
    options: ['<div>', '<h1>', '<p>'],
    correctAnswer: 1,
  },
  {
    _id: 'q_html_3',
    classId: 'class_html',
    question: 'HTML is used for?',
    options: ['Structure', 'Styling', 'Logic'],
    correctAnswer: 0,
  },

  // CSS
  {
    _id: 'q_css_1',
    classId: 'class_css',
    question: 'CSS stands for?',
    options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Color Style Sheets'],
    correctAnswer: 1,
  },
  {
    _id: 'q_css_2',
    classId: 'class_css',
    question: 'Which property changes text color?',
    options: ['font', 'color', 'background'],
    correctAnswer: 1,
  },
  {
    _id: 'q_css_3',
    classId: 'class_css',
    question: 'CSS is mainly for?',
    options: ['Structure', 'Styling', 'Logic'],
    correctAnswer: 1,
  },

  // React
  {
    _id: 'q_react_1',
    classId: 'class_react',
    question: 'React is a?',
    options: ['Framework', 'Library', 'Language'],
    correctAnswer: 1,
  },
  {
    _id: 'q_react_2',
    classId: 'class_react',
    question: 'React apps are built using?',
    options: ['Templates', 'Components', 'Controllers'],
    correctAnswer: 1,
  },
  {
    _id: 'q_react_3',
    classId: 'class_react',
    question: 'JSX is?',
    options: ['HTML', 'CSS', 'JS syntax extension'],
    correctAnswer: 2,
  },

  // Node
  {
    _id: 'q_node_1',
    classId: 'class_node',
    question: 'Node.js runs on?',
    options: ['Browser', 'Server', 'Database'],
    correctAnswer: 1,
  },
  {
    _id: 'q_node_2',
    classId: 'class_node',
    question: 'Node.js is built on?',
    options: ['V8 Engine', 'React', 'PHP'],
    correctAnswer: 0,
  },
  {
    _id: 'q_node_3',
    classId: 'class_node',
    question: 'Node.js uses which language?',
    options: ['Python', 'JavaScript', 'Java'],
    correctAnswer: 1,
  },

  // API
  {
    _id: 'q_api_1',
    classId: 'class_api',
    question: 'REST stands for?',
    options: ['Remote Execution', 'Representational State Transfer', 'Reactive State Tool'],
    correctAnswer: 1,
  },
  {
    _id: 'q_api_2',
    classId: 'class_api',
    question: 'GET requests are used to?',
    options: ['Create data', 'Fetch data', 'Delete data'],
    correctAnswer: 1,
  },
  {
    _id: 'q_api_3',
    classId: 'class_api',
    question: 'APIs communicate using?',
    options: ['HTML', 'JSON', 'CSS'],
    correctAnswer: 1,
  },

  // Databases
  {
    _id: 'q_db_1',
    classId: 'class_db',
    question: 'A database is used to?',
    options: ['Store data', 'Style UI', 'Handle requests'],
    correctAnswer: 0,
  },
  {
    _id: 'q_db_2',
    classId: 'class_db',
    question: 'MongoDB is?',
    options: ['SQL', 'NoSQL', 'File system'],
    correctAnswer: 1,
  },
  {
    _id: 'q_db_3',
    classId: 'class_db',
    question: 'Primary key is used to?',
    options: ['Style tables', 'Uniquely identify records', 'Encrypt data'],
    correctAnswer: 1,
  },

  // Design
  {
    _id: 'q_design_1',
    classId: 'class_design',
    question: 'Good design is?',
    options: ['Complex', 'User-focused', 'Flashy'],
    correctAnswer: 1,
  },
  {
    _id: 'q_design_2',
    classId: 'class_design',
    question: 'Contrast helps with?',
    options: ['Speed', 'Readability', 'Storage'],
    correctAnswer: 1,
  },
  {
    _id: 'q_design_3',
    classId: 'class_design',
    question: 'White space improves?',
    options: ['Performance', 'Clarity', 'Backend'],
    correctAnswer: 1,
  },

  // Research
  {
    _id: 'q_research_1',
    classId: 'class_research',
    question: 'User research helps to?',
    options: ['Guess needs', 'Understand users', 'Reduce costs'],
    correctAnswer: 1,
  },
  {
    _id: 'q_research_2',
    classId: 'class_research',
    question: 'Interviews are used for?',
    options: ['Quantitative data', 'Qualitative data', 'Styling'],
    correctAnswer: 1,
  },
  {
    _id: 'q_research_3',
    classId: 'class_research',
    question: 'Personas represent?',
    options: ['Developers', 'Users', 'Admins'],
    correctAnswer: 1,
  },

  // Prototyping
  {
    _id: 'q_proto_1',
    classId: 'class_prototype',
    question: 'A prototype is?',
    options: ['Final product', 'Early model', 'Database'],
    correctAnswer: 1,
  },
  {
    _id: 'q_proto_2',
    classId: 'class_prototype',
    question: 'Low-fidelity prototypes focus on?',
    options: ['Details', 'Structure', 'Code'],
    correctAnswer: 1,
  },
  {
    _id: 'q_proto_3',
    classId: 'class_prototype',
    question: 'Prototyping helps to?',
    options: ['Fix bugs', 'Validate ideas', 'Deploy apps'],
    correctAnswer: 1,
  },
]
