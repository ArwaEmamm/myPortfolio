
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Moon, Sun, ChevronDown, BookOpen, Building, Smartphone, ClipboardCheck } from 'lucide-react';
import Carousel from './Carousel';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const skills = [
    { name: 'Angular', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 88 },
    { name: 'TypeScript', level: 82 },
    { name: 'Laravel', level: 85 },
    { name: 'Django', level: 80 },
    { name: 'MongoDB', level: 80 },
    { name: 'MySQL / PostgreSQL', level: 80 },
    { name: 'Vue.js', level: 75 },
    { name: 'Express.js', level: 85 }
  ];

  const projects = [
    {
      title: 'Online Courses Platform (Udemy-like System)',
      description: 'Developed backend modules for a large-scale learning platform with secure subscriptions, structured courses, dynamic quizzes, and content protection (Laravel/Backend).',
      images: [],
      icon: <BookOpen size={64} className="text-blue-500" />,
      tech: ['Laravel', 'MySQL', 'REST APIs', 'Security', 'Payment Integration'],
      codeLinks: []
    },
    {
      title: 'Real Estate Rental Platform (Multi-Vendor System)',
      description: 'Backend for multi-vendor rental system supporting Admins, Owners, and Tenants with property workflows, rental requests, and maintenance modules.',
      images: [],
      icon: <Building size={64} className="text-purple-500" />,
      tech: ['Laravel', 'MySQL', 'cPanel', 'Architecture'],
      codeLinks: []
    },
    {
      title: 'Short Video Social Platform (TikTok-like)',
      description: 'Built backend system supporting short-video content publishing, user engagement mechanisms, media handling, and authentication.',
      images: [],
      icon: <Smartphone size={64} className="text-emerald-500" />,
      tech: ['Node.js', 'Express.js', 'Media Handling', 'MongoDB', 'REST APIs'],
      codeLinks: []
    },
    {
      title: 'Attendance & Grade Management System',
      description: 'QRCode-based university attendance tracking paired with a comprehensive grade management module (ITI Graduation Project - Grade: Excellent).',
      images: [],
      icon: <ClipboardCheck size={64} className="text-pink-500" />,
      tech: ['Node.js', 'React', 'MongoDB'],
      codeLinks: []
    },
    {
      title: 'Hadanat Al-Furqan Kindergarten System',
      description: 'A comprehensive kindergarten management system with Angular frontend and Node.js backend. Features include student registration, attendance tracking, and scheduling system.',
      images: [
        '/fre.png',
        '/free.png',
        '/freee.png',
        '/free.png',
        '/14(1).png',
      ],
      tech: ['Angular', 'Node.js', 'MongoDB', 'Express.js'],
      codeLinks: [
        { url: 'https://github.com/ArwaEmamm/schoolsystem', label: 'Full Code' }
      ]
    },
    {
      title: 'Medical System',
      description: 'A comprehensive hospital management system with React frontend and Django backend. Features include patient portal, doctor profiles, appointment scheduling system, and professional medical interface with real-time availability tracking.',
      images: [
        '/medical.JPG',
        '/medicall.JPG',
        '/medicaal.JPG',
        '/medicaaal.JPG',
        '/12.JPG',
      ],
      tech: ['React', 'Django', 'PostgreSQL', 'REST APIs'],
      codeLinks: [
        { url: 'https://github.com/ArwaEmamm/medical-react-django-front', label: 'Frontend' },
        { url: 'https://github.com/ArwaEmamm/medical-react-django-back', label: 'Backend' }
      ]
    },
    {
      title: 'Job Board Platform',
      description: 'A job board platform with Vue.js frontend and Laravel backend. Features job posting, application management, and user authentication.',
      images: [
        '/1(1).png',
        '/2(1).png',
        '/5(1).png',
        '/6(1).png',
      ],
      tech: ['Vue.js', 'Laravel', 'MySQL', 'Bootstrap'],
      codeLinks: [
        { url: 'https://github.com/ArwaEmamm/job-board', label: 'Vue Frontend' },
        { url: 'https://github.com/ArwaEmamm/JobBoardLaravel', label: 'Laravel Backend' }
      ]
    },
    {
      title: 'CafeteriaPHP_Project',
      description: 'A cafeteria management system with ordering, menu management, and reporting features.',
      images: [
        '/1.jpg',
        '/0.jpg',
        '/2.jpg',
        '/3.jpg',
        '/6.jpg',
      ],
      tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
      codeLinks: [
        { url: 'https://github.com/ArwaEmamm/CafeteriaPHP_Project', label: 'Full Code' }
      ]
    },
    {
      title: 'ITIans Community & Job Platform',
      description: 'A community and job platform for ITI graduates, featuring job postings, community discussions, and networking tools.',
      images: [
        '/iti.jpg',
        '/itii.jpg',
        '/itiii.jpg',
        '/itiiii.jpg',
      ],
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      codeLinks: [
        { url: 'https://github.com/ArwaEmamm/Graduation-Project-From-ITI-FrontEnd', label: 'Frontend' },
        { url: 'https://github.com/ArwaEmamm/Graduation-Project-From-ITI-BackEnd', label: 'Backend' }
      ]
    },
    {
      title: 'vedio-games',
      description: 'واجهة تفاعلية لعرض تصنيفات الألعاب باستخدام Vue.js وTailwind CSS.',
      images: [
        '/7.JPG',
        '/111.JPG',
        '/33.JPG',
        '/3334.JPG',
      ],
      tech: ['Vue.js', 'Tailwind CSS'],
      codeLinks: [
        { url: 'https://github.com/ArwaEmamm/vedio-games', label: 'Full Code' }
      ]
    }
    
    ,
    {
      title: 'Workflow System',
      description: `A Workflow Management System designed to automate and organize approval processes within companies. The system supports three main roles: Employee, Manager, and HR Manager (Admin). The HR Manager defines custom workflows for each request type, such as Leave Request or Salary Raise, with single or multi-step approval levels. Employees can submit requests and track their status in real time. The system sends instant notifications to all involved users upon submission, approval, or rejection, ensuring smooth and efficient workflow management.`,
      images: [
        '/landingpage.JPG',
        '/employerworkflow.JPG',
        '/hrmangerdashboard.JPG',
        '/requests.JPG',
         '/workflowdetails.JPG'

      ],
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
      codeLinks: [
        { url: 'https://github.com/ArwaEmamm/Business-Workflow-Automation-Platform', label: 'Frontend' },
        { url: 'https://github.com/ArwaEmamm/Business-Workflow-Automation-Platform-Back', label: 'Backend' }
      ],
      demoUrl: 'https://drive.google.com/file/d/1yvRAS3odhQb6M2v7RWwZKTQTbK6rOv8f/view?usp=sharing'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDarkMode ? 'bg-slate-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === section ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {section}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-200 ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'}`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-200 ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'}`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden py-4 border-t ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-2 capitalize transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === section ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent">
                Arwa Mostafa Emam
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-slate-600 dark:text-slate-300">
              Full Stack Developer
            </p>
            
            <p className="text-lg mb-12 max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
              Full-Stack Developer with strong experience in building scalable and secure web applications using React, Angular, Node.js, Express, Laravel, and Django. Experienced in developing modular systems, RESTful APIs, multi-role platforms, and performance optimized applications. Skilled in building end-to-end solutions including CRM systems, workflow platforms, content platforms, and large-scale production systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:scale-105 shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border-2 ${
                  isDarkMode 
                    ? 'border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400' 
                    : 'border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600'
                }`}
              >
                Get In Touch
              </button>
            </div>

            <div className="animate-bounce">
              <ChevronDown size={32} className="mx-auto text-slate-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6">Passionate Developer & Designer</h3>
              <p className="text-lg mb-6 text-slate-600 dark:text-slate-300">
                Full-Stack Developer with strong experience in building scalable and secure web applications using React, Angular, Node.js, Express, Laravel, and Django. Experienced in developing modular systems, RESTful APIs, multi-role platforms, and performance optimized applications. Skilled in building end-to-end solutions including CRM systems, workflow platforms, content platforms, and large-scale production systems.
              </p>
              
              <p className="text-lg mb-8 text-slate-600 dark:text-slate-300">
                I'm passionate about creating efficient, scalable solutions and have experience working with various 
                technologies including Angular, React, Vue.js, Node.js, Django, and Laravel. I believe in continuous 
                learning and staying up-to-date with the latest technologies and best practices.
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold">
                  Angular Expert
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-semibold">
                  React Developer
                </span>
                <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-4 py-2 rounded-full text-sm font-semibold">
                  Full Stack
                </span>
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-full text-sm font-semibold">
                  ITI Graduate
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
            <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className={`p-6 rounded-lg shadow-lg border-l-4 border-blue-600 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
              <div className="flex justify-between items-start mb-2">
                 <h3 className="text-2xl font-bold">Backend Developer</h3>
                 <span className="text-sm font-semibold px-3 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">Full-Time</span>
              </div>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">Emcan Solutions</p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>Developed scalable backend systems using Laravel Modular Architecture.</li>
                <li>Contributed to large-scale production platforms used by multiple users.</li>
                <li>Built secure APIs and handled authentication and role-based systems.</li>
                <li>Managed deployments using cPanel and Azure.</li>
                <li>Optimized database queries and improved system performance.</li>
                <li>Performed maintenance and feature enhancements on live systems.</li>
              </ul>
            </div>

            <div className={`p-6 rounded-lg shadow-lg border-l-4 border-purple-600 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
              <h3 className="text-2xl font-bold mb-2">Backend Developer</h3>
              <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-4">Freelance</p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>Developed CRM systems using Laravel with RESTful API architecture.</li>
                <li>Designed authentication systems and role-based access control.</li>
                <li>Built scalable API endpoints and handled business workflow logic.</li>
              </ul>
            </div>

            <div className={`p-6 rounded-lg shadow-lg border-l-4 border-emerald-500 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
              <h3 className="text-2xl font-bold mb-2">Freelance Full-Stack Developer</h3>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>Developed Business Workflow Automation Platform using React and Node.js.</li>
                <li>Built backend system for short-video social platform.</li>
                <li>Developed RESTful APIs and frontend integrations.</li>
                <li>Deployed applications using Azure and FileZilla.</li>
              </ul>
            </div>

            <div className={`p-6 rounded-lg shadow-lg border-l-4 border-pink-500 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <div className="mb-6">
                <p className="text-xl text-pink-500 dark:text-pink-400 font-semibold">Information Technology Institute (ITI)</p>
                <p className="text-slate-600 dark:text-slate-300">Open Source Full-Stack Track</p>
              </div>
              <div>
                <p className="text-xl text-pink-500 dark:text-pink-400 font-semibold">Assiut University</p>
                <p className="text-slate-600 dark:text-slate-300">Bachelor of Computers and Information</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">{skill.level}%</span>
                </div>
                <div className={`w-full ${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'} rounded-full h-3`}>
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
            
            <div className="md:col-span-2 mt-8">
              <h3 className="text-xl font-bold mb-4">Additional Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {['NestJS', 'PHP', 'HTML', 'CSS', 'JavaScript', 'Azure', 'AWS (Basics)', 'Firebase', 'cPanel', 'Git', 'GitHub', 'Postman', 'Linux', 'Bash', 'RESTful APIs', 'MVC', 'OOP', 'SOLID Principles'].map((tech) => (
                  <span
                    key={tech}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 px-3 py-2 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                {/* إذا كان المشروع هو Job Board Platform، اعرض كاروسيل الصور */}
                {(project.images && Array.isArray(project.images) && project.images.length > 0) ? (
                  <Carousel images={project.images} />
                ) : (
                  project.icon ? (
                    <div className={`h-48 flex items-center justify-center ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'} border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
                      <div className="transform transition-transform hover:scale-110 duration-300 drop-shadow-md">
                        {project.icon}
                      </div>
                    </div>
                  ) : null
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* أزرار code متعددة لكل مشروع */}
                  {project.codeLinks && project.codeLinks.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.codeLinks.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-200 border border-slate-300 dark:border-slate-600 rounded px-3 py-1"
                        >
                          <Github size={16} />
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <a
               href="mailto:arwaemam2002@gmail.com"
                className={`${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-slate-50'} p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:scale-105`}
              >
                <Mail size={32} className="mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
               <p className="text-slate-600 dark:text-slate-300">arwaemam2002@gmail.com</p>
              </a>
              
              <a
               href="https://linkedin.com/in/arwa-emam"
                className={`${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-slate-50'} p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:scale-105`}
              >
                <Linkedin size={32} className="mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-slate-600 dark:text-slate-300">Connect with me</p>
              </a>
              
              <a
               href="https://github.com/ArwaEmamm"
                className={`${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-slate-50'} p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:scale-105`}
              >
                <Github size={32} className="mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <p className="text-slate-600 dark:text-slate-300">Check out my code</p>
              </a>
            </div>
            
            <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} p-8 rounded-lg shadow-xl`}>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-white' 
                          : 'bg-slate-50 border-slate-300'
                      }`}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-white' 
                          : 'bg-slate-50 border-slate-300'
                      }`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white' 
                        : 'bg-slate-50 border-slate-300'
                    }`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-200'} border-t`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2025 Arwa Mostafa Emam. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;