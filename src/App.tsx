
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import Carousel from './Carousel';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
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
    { name: 'Django', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Laravel', level: 78 },
    { name: 'Vue.js', level: 75 },
  ];

  const projects = [
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
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
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
                className={`p-2 rounded-lg transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
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
            <div className={`md:hidden py-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
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
            <div className="mb-8">
              <img
                src="/nxEDwPGJxtqtCZrPweynwxDRjQl3uuardbb12guE.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-500 shadow-xl"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent">
                Arwa Mostafa Emam
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Full Stack Developer
            </p>
            
            <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              Motivated and detail-oriented Full-Stack Developer with hands-on experience in frontend and backend development. Passionate about clean, maintainable code and continuous learning.
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
                    ? 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400' 
                    : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                }`}
              >
                Get In Touch
              </button>
            </div>

            <div className="animate-bounce">
              <ChevronDown size={32} className="mx-auto text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6">Passionate Developer & Designer</h3>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                I'm a motivated Full-Stack Developer with hands-on experience in both frontend and backend development. 
                Skilled in Angular, React, Node.js, Express.js, Django, and cloud solutions. Currently graduated from 
                ITI Open Source Full-Stack program and hold a Bachelor's degree in Computers and Information from Assiut University.
              </p>
              
              <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
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

      {/* Skills Section */}
      <section id="skills" className="py-20">
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
                  <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-3`}>
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
                {['PHP', 'Laravel', 'NestJS', 'Odoo', 'PostgreSQL', 'AWS', 'Firebase', 'Linux', 'Git', 'REST APIs', 'Flutter', 'Bootstrap'].map((tech) => (
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
      <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                {/* إذا كان المشروع هو Job Board Platform، اعرض كاروسيل الصور */}
                {(project.images && Array.isArray(project.images)) ? (
                  <Carousel images={project.images} />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
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
                          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200 border border-gray-300 dark:border-gray-600 rounded px-3 py-1"
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
            <p className="text-lg mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <a
               href="mailto:arwaemam2002@gmail.com"
                className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:scale-105`}
              >
                <Mail size={32} className="mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
               <p className="text-gray-600 dark:text-gray-300">arwaemam2002@gmail.com</p>
              </a>
              
              <a
               href="https://linkedin.com/in/arwa-emam"
                className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:scale-105`}
              >
                <Linkedin size={32} className="mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-600 dark:text-gray-300">Connect with me</p>
              </a>
              
              <a
               href="https://github.com/ArwaEmamm"
                className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:scale-105`}
              >
                <Github size={32} className="mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <p className="text-gray-600 dark:text-gray-300">Check out my code</p>
              </a>
            </div>
            
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-xl`}>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-gray-50 border-gray-300'
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
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-gray-50 border-gray-300'
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
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-gray-50 border-gray-300'
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
      <footer className={`py-8 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'} border-t`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Arwa Mostafa Emam. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;