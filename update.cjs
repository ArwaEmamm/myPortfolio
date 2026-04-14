const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace color 'gray' with 'slate' (slate is a more professional/nicer deep blue-gray)
content = content.replace(/gray-/g, 'slate-');

// Replace Hero text
content = content.replace(
  'Motivated and detail-oriented Full-Stack Developer with hands-on experience in frontend and backend development. Passionate about clean, maintainable code and continuous learning.',
  'Full-Stack Developer with strong experience in building scalable and secure web applications using React, Angular, Node.js, Express, Laravel, and Django. Experienced in developing modular systems, RESTful APIs, multi-role platforms, and performance optimized applications. Skilled in building end-to-end solutions including CRM systems, workflow platforms, content platforms, and large-scale production systems.'
);

// Replace About text
content = content.replace(
  /I'm a motivated Full-Stack Developer with hands-on experience in both frontend and backend development\.\s*Skilled in Angular, React, Node\.js, Express\.js, Django, and cloud solutions\. Currently graduated from\s*ITI Open Source Full-Stack program and hold a Bachelor's degree in Computers and Information from Assiut University\./,
  "Full-Stack Developer with strong experience in building scalable and secure web applications using React, Angular, Node.js, Express, Laravel, and Django. Experienced in developing modular systems, RESTful APIs, multi-role platforms, and performance optimized applications. Skilled in building end-to-end solutions including CRM systems, workflow platforms, content platforms, and large-scale production systems."
);

// Replace Experience section completely
const newExperience = `      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className={\`p-6 rounded-lg shadow-lg border-l-4 border-blue-600 \${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}\`}>
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

            <div className={\`p-6 rounded-lg shadow-lg border-l-4 border-purple-600 \${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}\`}>
              <h3 className="text-2xl font-bold mb-2">Backend Developer</h3>
              <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-4">Freelance</p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>Developed CRM systems using Laravel with RESTful API architecture.</li>
                <li>Designed authentication systems and role-based access control.</li>
                <li>Built scalable API endpoints and handled business workflow logic.</li>
              </ul>
            </div>

            <div className={\`p-6 rounded-lg shadow-lg border-l-4 border-emerald-500 \${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}\`}>
              <h3 className="text-2xl font-bold mb-2">Freelance Full-Stack Developer</h3>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>Developed Business Workflow Automation Platform using React and Node.js.</li>
                <li>Built backend system for short-video social platform.</li>
                <li>Developed RESTful APIs and frontend integrations.</li>
                <li>Deployed applications using Azure and FileZilla.</li>
              </ul>
            </div>

            <div className={\`p-6 rounded-lg shadow-lg border-l-4 border-pink-500 \${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}\`}>
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
      </section>`;

content = content.replace(/<section id="experience"[\s\S]*?<\/section>/, newExperience);

const newSkills = `const skills = [
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
  ];`;

content = content.replace(/const skills = \[[\s\S]*?\];/, newSkills);

content = content.replace(
  /\['PHP', 'Laravel', 'NestJS', 'Odoo', 'PostgreSQL', 'AWS', 'Firebase', 'Linux', 'Git', 'REST APIs', 'Flutter', 'Bootstrap'\]/,
  "['NestJS', 'PHP', 'HTML', 'CSS', 'JavaScript', 'Azure', 'AWS (Basics)', 'Firebase', 'cPanel', 'Git', 'GitHub', 'Postman', 'Linux', 'Bash', 'RESTful APIs', 'MVC', 'OOP', 'SOLID Principles']"
);

// Add missing projects to the top of the projects array.
const newProjectsJSON = `[
    {
      title: 'Online Courses Platform (Udemy-like System)',
      description: 'Developed backend modules for a large-scale learning platform with secure subscriptions, structured courses, dynamic quizzes, and content protection (Laravel/Backend).',
      images: [],
      tech: ['Laravel', 'MySQL', 'REST APIs', 'Security', 'Payment Integration'],
      codeLinks: []
    },
    {
      title: 'Real Estate Rental Platform (Multi-Vendor System)',
      description: 'Backend for multi-vendor rental system supporting Admins, Owners, and Tenants with property workflows, rental requests, and maintenance modules.',
      images: [],
      tech: ['Laravel', 'MySQL', 'cPanel', 'Architecture'],
      codeLinks: []
    },
    {
      title: 'Short Video Social Platform (TikTok-like)',
      description: 'Built backend system supporting short-video content publishing, user engagement mechanisms, media handling, and authentication.',
      images: [],
      tech: ['Node.js', 'Express.js', 'Media Handling', 'MongoDB', 'REST APIs'],
      codeLinks: []
    },
    {
      title: 'Attendance & Grade Management System',
      description: 'QRCode-based university attendance tracking paired with a comprehensive grade management module (ITI Graduation Project - Grade: Excellent).',
      images: [],
      tech: ['Node.js', 'React', 'MongoDB'],
      codeLinks: []
    },`;

content = content.replace(/const projects = \[/, 'const projects = ' + newProjectsJSON);

fs.writeFileSync('src/App.tsx', content);

console.log('App.tsx updated based on CV!');
