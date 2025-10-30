//data of portfolio
export const personalInfo = {
  name: "ANNAPOORNESHWARI M",
  title: "MERN Stack Developer",
  subtitle: "Building Responsive & User-friendly Web Applications",
  phone: "+91 9900379635",
  email: "annapoornaparipoorna@gmail.com",
  linkedin: "annapoorneshwari-m-187334298",
  github: "github.com/Annapoorneshwari123",
  summary: "A motivated BCA graduate (2024) with MERN stack training and hands-on experience in building responsive, user-friendly web applications. Skilled in frontend/backend development, RESTful APIs, and database integration, with a strong foundation in programming, problem-solving, and teamwork."
};

export const skills = {
  languages: ['JavaScript', 'Python (Basic)', 'MySQL'],
  technologies: ['React.js', 'Express.js', 'MongoDB', 'Mongoose', 'Node.js'],
  tools: ['Git', 'GitHub', 'VS Code', 'NPM'],
  concepts: ['CRUD Operations', 'MVC', 'RESTful API', 'Authentication & Authorization', 'Routing']
};

export const projects = [
  {
    id: 1,
    title: 'Recipe Recommendation System',
    description: 'A dynamic web application that integrates TheMealDB API to fetch real-time recipe data for meals, ingredients, and categories. Features smooth animations and clean iconography for enhanced user experience.',
    technologies: ['React.js', 'Bootstrap', 'Styled CSS', 'TheMealDB API', 'Axios'],
    features: [
      'Real-time recipe data integration using TheMealDB API',
      'HTTP requests handling with Axios for efficient API responses',
      'Scroll and card animations for enhanced UI interactivity',
      'Clean iconography using React Icons and Font Awesome',
      'Responsive design with Bootstrap and custom CSS'
    ],
    type: 'Frontend Application',
    status: 'completed'
  },
  {
    id: 2,
    title: 'Task Manager Application',
    description: 'A full-stack MERN application with comprehensive task management features including user authentication, CRUD operations, and secure data storage with MongoDB integration.',
    technologies: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'JWT', 'bcrypt'],
    features: [
      'User authentication with JWT and bcrypt for secure login/registration',
      'Complete CRUD operations for task management',
      'MongoDB database integration using Mongoose',
      'Clean and intuitive user interface design',
      'Secure data storage and retrieval system'
    ],
    type: 'Full Stack Application',
    status: 'completed'
  }
];

export const education = [
  {
    id: 1,
    degree: 'BCA (Computer Application)',
    institution: 'Ramanashree Academy Of Management, Bengaluru',
    duration: '2021 - 2024',
    grade: 'CGPA: 8.61'
  },
  {
    id: 2,
    degree: 'II PUC (Commerce)',
    institution: 'Sarada Vilas PU college, Mysore',
    duration: '2019 - 2020',
    grade: 'Percentage: 85.5%'
  },
  {
    id: 3,
    degree: 'SSLC',
    institution: 'ST Thomas High School, Mysore',
    duration: '2017 - 2018',
    grade: 'Percentage: 78%'
  }
];

export const contactInfo = {
  phone: "+91 9900379635",
  email: "annapoornaparipoorna@gmail.com",
  linkedin: "https://linkedin.com/in/annapoorneshwari-m-187334298",
  github: "https://github.com/Annapoorneshwari123",
  location: "Bengaluru, India"
};