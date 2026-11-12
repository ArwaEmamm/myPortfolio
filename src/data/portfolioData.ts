export interface CodeLink {
  url: string;
  label: string;
  type?: 'github' | 'live' | 'video';
}

export type ProjectCategory = 'All' | 'Backend & Laravel' | 'Full-Stack' | 'Frontend & Mobile';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  category: Exclude<ProjectCategory, 'All'>;
  featured?: boolean;
  badge?: string;
  description: string;
  highlights: string[];
  images: string[];
  architectureModules?: string[];
  iconName?: 'school' | 'courses' | 'realestate' | 'workflow' | 'iti' | 'attendance' | 'kindergarten' | 'medical' | 'jobs' | 'cafeteria' | 'games' | 'amazepms';
  tech: string[];
  codeLinks: CodeLink[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  type: string;
  period: string;
  current?: boolean;
  accent: 'indigo' | 'cyan' | 'emerald' | 'violet' | 'amber';
  bullets: string[];
  stack?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'layout' | 'server' | 'database' | 'layers' | 'terminal' | 'cloud';
  items: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location?: string;
  highlight?: string;
}

export const PROFILE = {
  fullName: 'ARWA MOSTAFA EMAM HUSSEIN',
  displayName: 'Arwa Mostafa Emam',
  role: 'Full Stack Developer',
  location: 'Cairo, Egypt',
  phone: '+20 1117504137',
  email: 'arwaemam2002@gmail.com',
  linkedin: 'https://www.linkedin.com/in/arwa-emam',
  github: 'https://github.com/ArwaEmamm',
  portfolioUrl: 'https://my-portfolio-orpin-beta-27.vercel.app/',
  summary:
    'Full Stack Developer with experience building web applications and business management systems using Laravel, React, Angular, Node.js, and JavaScript. Skilled in developing responsive frontend interfaces, integrating RESTful APIs, building backend services, and designing database-driven applications. Experienced in authentication, role-based access control, multi-role platforms, CRM features, and workflow automation. Familiar with software architecture principles, database design, application deployment, and maintaining web applications.',
  softSkills: [
    'Communication',
    'Teamwork',
    'Problem Solving',
    'Time Management',
    'Adaptability',
  ],
  languages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Good' },
  ],
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'royaltechni-backend',
    company: 'RoyalTechni',
    role: 'Backend Developer',
    type: 'Current Role',
    period: 'June 2026 – Present',
    current: true,
    accent: 'indigo',
    bullets: [
      'Develop and maintain backend functionality for a multi-school management and e-learning platform using Laravel.',
      'Implement authentication, authorization, and role-based access control for different user types.',
      'Develop school management, teacher assignment, and student enrollment modules.',
      'Build RESTful APIs and academic management features including grades, subjects, sections, lessons, question banks, and examination workflows.',
      'Work with database structures, queries, and backend logic to support application functionality and performance.',
      'Participate in feature development, maintenance, and production deployments.',
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'RESTful APIs', 'RBAC'],
  },
  {
    id: 'royaltechni-data',
    company: 'RoyalTechni',
    role: 'Data Entry Specialist',
    type: 'Current Role',
    period: 'August 2026 – Present',
    current: true,
    accent: 'cyan',
    bullets: [
      'Enter and manage educational data across deployed websites, transferring information from Excel, Word, and PDF files.',
      'Manage educational content including exams, questions, lessons, videos, and other learning materials.',
      'Test data accuracy and website content display, identify errors, and perform corrections when needed.',
    ],
    stack: ['Content QA', 'Educational Data', 'Excel / Word / PDF'],
  },
  {
    id: 'emcan',
    company: 'Emcan Solutions',
    role: 'Backend Developer',
    type: 'Project-Based Contract',
    period: 'December 2025 – May 2026',
    accent: 'emerald',
    bullets: [
      'Developed backend systems using Laravel Modular Architecture.',
      'Built RESTful APIs with authentication and role-based access control.',
      'Worked on application deployment using cPanel and Azure.',
      'Optimized database queries and supported application performance.',
      'Performed maintenance and feature enhancements on live systems.',
    ],
    stack: ['Laravel Modular Architecture', 'MySQL', 'Azure', 'cPanel'],
  },
  {
    id: 'tms',
    company: 'TMS Company',
    role: 'Freelance Laravel Backend Developer',
    type: 'Freelance Team',
    period: 'November 2025 – February 2026',
    accent: 'violet',
    bullets: [
      'Developed and maintained RESTful APIs using Laravel.',
      'Designed authentication and role-based access control modules.',
      'Built backend services for business workflows and CRM features.',
      'Worked on database operations and API integration.',
    ],
    stack: ['Laravel', 'CRM Systems', 'RBAC', 'REST APIs'],
  },
  {
    id: 'self-employed',
    company: 'Self-Employed',
    role: 'Full Stack Developer',
    type: 'Freelance & Contract',
    period: '2024 – 2025',
    accent: 'amber',
    bullets: [
      'Developed web applications using React, Angular, Node.js, and Laravel.',
      'Built frontend interfaces and integrated them with backend APIs.',
      'Developed business workflow features and database-driven application functionality.',
      'Worked with relational and NoSQL databases and supported application deployment.',
    ],
    stack: ['React', 'Angular', 'Node.js', 'Laravel', 'MongoDB', 'MySQL'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Responsive & component-driven interfaces',
    iconName: 'layout',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Angular', 'Vue.js', 'Flutter'],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    subtitle: 'Scalable APIs & multi-role services',
    iconName: 'server',
    items: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'Django', 'NestJS', 'RESTful API Development'],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational & NoSQL data modeling',
    iconName: 'database',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
  },
  {
    id: 'architecture',
    title: 'Software Architecture',
    subtitle: 'Clean, modular, and secure systems',
    iconName: 'layers',
    items: [
      'MVC',
      'Object-Oriented Programming (OOP)',
      'SOLID Principles',
      'Modular Architecture',
      'Role-Based Access Control (RBAC)',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Technologies',
    subtitle: 'Version control, testing & CLI workflow',
    iconName: 'terminal',
    items: ['Git', 'GitHub', 'Postman', 'Linux', 'Bash'],
  },
  {
    id: 'cloud',
    title: 'Cloud & Deployment',
    subtitle: 'Production hosting & environment setup',
    iconName: 'cloud',
    items: ['Azure', 'AWS (Basics)', 'cPanel', 'FileZilla'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Information Technology Institute (ITI)',
    degree: 'Open Source Full-Stack Track',
    period: 'October 2024 – July 2025',
    location: 'Minia Branch',
    highlight: 'Intensive 9-month full-stack software engineering program',
  },
  {
    institution: 'Assiut University',
    degree: 'Bachelor of Computers and Information',
    period: 'October 2020 – June 2024',
    location: 'Assiut, Egypt',
    highlight: 'Graduation Project awarded Excellent',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'school-elearning',
    title: 'School Management & E-Learning Platform',
    subtitle: 'Multi-School SaaS Backend',
    category: 'Backend & Laravel',
    featured: true,
    badge: 'Current Production Focus',
    description:
      'Backend architecture for a multi-school management and e-learning platform supporting Super Admin, School Admins, Teachers, and Students with complete academic and examination workflows.',
    highlights: [
      'Multi-role architecture for Super Admin, School Admins, Teachers & Students',
      'Authentication, registration, and granular role-based permissions',
      'Academic structure: grades, subjects, sections, lessons & question banks',
      'Examination workflows and role-based dashboards',
    ],
    images: [],
    architectureModules: ['Super Admin', 'School Admin', 'Teachers', 'Students', 'Question Banks', 'Exams API'],
    iconName: 'school',
    tech: ['Laravel', 'PHP', 'MySQL', 'RESTful APIs', 'RBAC'],
    codeLinks: [],
  },
  {
    id: 'online-courses',
    title: 'Online Courses Platform (Udemy-like)',
    subtitle: 'Subscription E-Learning Backend',
    category: 'Backend & Laravel',
    featured: true,
    badge: 'Backend System',
    description:
      'Backend functionality for an online learning platform featuring subscription-based access to structured courses, protected learning materials, and multi-format assessment quizzes.',
    highlights: [
      'Subscription-based access control to course content',
      'Quiz modules supporting multiple-choice, true/false, and written questions',
      'Course & learning material management workflows',
    ],
    images: [],
    architectureModules: ['Subscriptions', 'Content Protection', 'MCQ & Written Quizzes', 'Course CRUD'],
    iconName: 'courses',
    tech: ['Laravel', 'PHP', 'MySQL', 'RESTful APIs'],
    codeLinks: [],
  },
  {
    id: 'real-estate',
    title: 'Real Estate Rental Platform (Multi-Vendor)',
    subtitle: 'Property & Maintenance Workflows',
    category: 'Backend & Laravel',
    featured: true,
    badge: 'Multi-Vendor',
    description:
      'Multi-role backend for Admins, Property Owners, and Tenants powering property listings, rental request approvals, and tenant maintenance workflows.',
    highlights: [
      'Multi-role backend for Admins, Property Owners, and Tenants',
      'Property listings, rental requests, and maintenance workflows',
      'Structured relational database schema for users, properties & operations',
    ],
    images: [],
    architectureModules: ['Admins', 'Property Owners', 'Tenants', 'Rental Requests', 'Maintenance'],
    iconName: 'realestate',
    tech: ['Laravel', 'PHP', 'MySQL', 'Modular Architecture'],
    codeLinks: [],
  },
  {
    id: 'workflow-automation',
    title: 'Business Workflow Automation Platform',
    subtitle: 'Role-Based Approval & Notification Engine',
    category: 'Full-Stack',
    featured: true,
    badge: 'Live Video Demo',
    description:
      'Full-stack business workflow platform enabling HR Managers to design custom multi-step approval chains for employee requests while employees track statuses with real-time notifications and activity logs.',
    highlights: [
      'Employee requests, multi-step approval processes & role-based task management',
      'Express.js RESTful APIs integrated with a responsive React frontend',
      'Real-time notifications via Socket.io and comprehensive activity logs',
    ],
    images: [
      '/landingpage.JPG',
      '/employerworkflow.JPG',
      '/hrmangerdashboard.JPG',
      '/requests.JPG',
      '/workflowdetails.JPG',
    ],
    iconName: 'workflow',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    codeLinks: [
      {
        url: 'https://github.com/ArwaEmamm/Business-Workflow-Automation-Platform',
        label: 'Frontend',
        type: 'github',
      },
      {
        url: 'https://github.com/ArwaEmamm/Business-Workflow-Automation-Platform-Back',
        label: 'Backend',
        type: 'github',
      },
      {
        url: 'https://drive.google.com/file/d/1yvRAS3odhQb6M2v7RWwZKTQTbK6rOv8f/view?usp=sharing',
        label: 'Demo Video',
        type: 'video',
      },
    ],
  },
  {
    id: 'itians-platform',
    title: 'ITI Graduation Project – Itians Platform',
    subtitle: 'Career & Community Portal',
    category: 'Full-Stack',
    featured: true,
    badge: 'ITI Graduation Project',
    description:
      'Platform dedicated to managing job opportunities and applications for ITI graduates, pairing a Laravel REST API backend with a React.js frontend.',
    highlights: [
      'Authentication, job posting, and application management functionality',
      'Laravel backend APIs integrated seamlessly with React.js frontend',
      'Built collaboratively as the ITI Open Source Full-Stack graduation project',
    ],
    images: ['/iti.jpg', '/itii.jpg', '/itiii.jpg', '/itiiii.jpg', '/itiiiiii.jpg'],
    iconName: 'iti',
    tech: ['React.js', 'Laravel', 'PHP', 'MySQL', 'RESTful APIs'],
    codeLinks: [
      {
        url: 'https://github.com/Salma457/Graduation-Project-From-ITI-FrontEnd',
        label: 'Frontend',
        type: 'github',
      },
      {
        url: 'https://github.com/Salma457/Graduation-Project-From-ITI-BackEnd',
        label: 'Backend',
        type: 'github',
      },
    ],
  },
  {
    id: 'attendance-grade',
    title: 'Attendance & Grade Management System',
    subtitle: 'QR-Code Mobile & Backend Solution',
    category: 'Frontend & Mobile',
    featured: true,
    badge: 'Awarded Excellent',
    description:
      'Cross-platform Flutter mobile application integrated with PHP & MySQL backend APIs for QR-code-based student attendance tracking and academic grade management.',
    highlights: [
      'QR-code-based attendance verification integrated with grade management',
      'Cross-platform Flutter application consuming custom PHP backend APIs',
      'University graduation project awarded Excellent grade',
    ],
    images: [],
    architectureModules: ['Flutter Mobile App', 'QR Scanner', 'PHP REST API', 'MySQL Grades DB'],
    iconName: 'attendance',
    tech: ['Flutter', 'PHP', 'MySQL', 'REST APIs'],
    codeLinks: [
      {
        url: 'https://github.com/ArwaEmamm/Streamlining-Attendance-and-Grade-Management',
        label: 'Repository',
        type: 'github',
      },
    ],
  },
  {
    id: 'hadanat-alfurqan',
    title: 'Hadanat Al-Furqan Kindergarten System',
    subtitle: 'Kindergarten Management Portal',
    category: 'Full-Stack',
    featured: true,
    badge: 'Angular + Node.js',
    description:
      'Comprehensive kindergarten management system featuring an Angular frontend with reusable UI components integrated with Node.js and MongoDB backend APIs.',
    highlights: [
      'Developed the Angular frontend with reusable, modular components',
      'Implemented interfaces for student profiles, registration, attendance & scheduling',
      'Integrated seamlessly with Node.js & MongoDB backend APIs',
    ],
    images: ['/fre.png', '/free.png', '/freee1.png', '/14(1).png'],
    iconName: 'kindergarten',
    tech: ['Angular', 'Node.js', 'Express.js', 'MongoDB'],
    codeLinks: [
      {
        url: 'https://github.com/ArwaEmamm/Shcool_System',
        label: 'Repository',
        type: 'github',
      },
    ],
  },
  {
    id: 'amazepms',
    title: 'AmazePMS Website Redesign',
    subtitle: 'Interactive SaaS Marketing Experience',
    category: 'Frontend & Mobile',
    badge: 'Live Demo',
    description:
      'Modern, interactive redesign of the AmazePMS marketing website featuring a clean SaaS UI, Framer Motion & GSAP animations, Lenis smooth scrolling, and a responsive component architecture.',
    highlights: [
      'Built with Next.js 14, React, TypeScript & Tailwind CSS',
      'Smooth scroll choreography using Framer Motion, GSAP & Lenis',
      'Responsive component-based SaaS design deployed live on Vercel',
    ],
    images: ['/1tech.JPG', '/2tech.JPG', '/3tech.JPG', '/4tec.JPG', '/5tech.JPG', '/6tech.JPG'],
    iconName: 'amazepms',
    tech: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
    codeLinks: [
      {
        url: 'https://github.com/ArwaEmamm/Amaza',
        label: 'GitHub',
        type: 'github',
      },
      {
        url: 'https://amaza-lc3k.vercel.app/',
        label: 'Live Demo',
        type: 'live',
      },
    ],
  },
  {
    id: 'medical-system',
    title: 'Medical Clinic & Hospital System',
    subtitle: 'Patient Portal & Appointment Booking',
    category: 'Full-Stack',
    description:
      'Hospital management platform with a React frontend and Django backend featuring a patient portal, doctor profiles, appointment scheduling, and real-time availability tracking.',
    highlights: [
      'Patient portal, doctor directory & real-time appointment scheduling',
      'Django REST API backend backed by PostgreSQL',
    ],
    images: ['/medical.JPG', '/medicall.JPG', '/medicaal.JPG', '/medicaaal.JPG', '/12.JPG'],
    iconName: 'medical',
    tech: ['React', 'Django', 'PostgreSQL', 'REST APIs'],
    codeLinks: [
      {
        url: 'https://github.com/ArwaEmamm/medical-react-django-front',
        label: 'Frontend',
        type: 'github',
      },
      {
        url: 'https://github.com/ArwaEmamm/medical-react-django-back',
        label: 'Backend',
        type: 'github',
      },
    ],
  },
  {
    id: 'job-board',
    title: 'Job Board Platform',
    subtitle: 'Vue.js & Laravel Recruitment Portal',
    category: 'Full-Stack',
    description:
      'Full-stack recruitment portal combining a Vue.js frontend with a Laravel backend for job postings, candidate applications, and user authentication.',
    highlights: [
      'Job posting, filtering, and candidate application management',
      'Decoupled Vue.js SPA consuming Laravel RESTful APIs',
    ],
    images: ['/1(1).png', '/2(1).png', '/5(1).png', '/6(1).png'],
    iconName: 'jobs',
    tech: ['Vue.js', 'Laravel', 'MySQL', 'Bootstrap'],
    codeLinks: [
      {
        url: 'https://github.com/ArwaEmamm/job-board',
        label: 'Vue Frontend',
        type: 'github',
      },
      {
        url: 'https://github.com/ArwaEmamm/JobBoardLaravel',
        label: 'Laravel Backend',
        type: 'github',
      },
    ],
  },
  {
    id: 'cafeteria-php',
    title: 'Cafeteria Management System',
    subtitle: 'Ordering & Inventory Portal',
    category: 'Full-Stack',
    description:
      'Web-based cafeteria management application supporting customer ordering, menu management, order status tracking, and administrative reporting.',
    highlights: [
      'Menu management, order placement & admin reporting workflows',
      'Built with core PHP & MySQL relational database design',
    ],
    images: ['/1.jpg', '/0.jpg', '/2.jpg', '/3.jpg', '/6.jpg'],
    iconName: 'cafeteria',
    tech: ['PHP', 'MySQL', 'HTML5', 'CSS3'],
    codeLinks: [
      {
        url: 'https://github.com/ArwaEmamm/CafeteriaPHP_Project',
        label: 'Repository',
        type: 'github',
      },
    ],
  },
  {
    id: 'video-games-ui',
    title: 'Video Games Discovery UI',
    subtitle: 'Interactive Category Explorer',
    category: 'Frontend & Mobile',
    description:
      'Interactive frontend interface for browsing and filtering video game categories, built with Vue.js and Tailwind CSS.',
    highlights: [
      'Interactive category filtering and modern gaming catalog layout',
      'Responsive Vue.js components styled with Tailwind CSS',
    ],
    images: ['/7.JPG', '/111.JPG', '/33.JPG', '/3334.JPG'],
    iconName: 'games',
    tech: ['Vue.js', 'Tailwind CSS'],
    codeLinks: [
      {
        url: 'https://github.com/ArwaEmamm/vedio-games',
        label: 'Repository',
        type: 'github',
      },
    ],
  },
];

