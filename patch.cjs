const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const target = `{/* إذا كان المشروع هو Job Board Platform، اعرض كاروسيل الصور */}
                {(project.images && Array.isArray(project.images)) ? (
                  <Carousel images={project.images} />
                ) : null}`;

const replacement = `{/* إذا كان المشروع يحوي صور، اعرض كاروسيل الصور، وإلا اعرض الأيقونة */}
                {(project.images && Array.isArray(project.images) && project.images.length > 0) ? (
                  <Carousel images={project.images} />
                ) : (
                  project.icon ? (
                    <div className={\`h-48 flex items-center justify-center \${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'} border-b \${isDarkMode ? 'border-slate-700' : 'border-slate-200'}\`}>
                      <div className="transform transition-transform hover:scale-110 duration-300 drop-shadow-md">
                        {project.icon}
                      </div>
                    </div>
                  ) : null
                )}`;

// Handle CRLF or LF differences
const normalizedTarget = target.replace(/\r\n/g, '\\n').replace(/\n/g, '\\r?\\n');
const regex = new RegExp(normalizedTarget.replace(/([.*+?^=!:$(){}|\\[\\]\\/\\\\])/g, "\\\\$1").replace(/\\\\r\\\?\\\\n/g, '\\r?\\n\\s*'), 'g');

content = content.replace(regex, replacement);

fs.writeFileSync('src/App.tsx', content);
