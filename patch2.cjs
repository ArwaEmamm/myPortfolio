const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const target1 = "{(project.images && Array.isArray(project.images)) ? (";
const replacement1 = `{(project.images && Array.isArray(project.images) && project.images.length > 0) ? (`

const target2 = `) : null}`;
const replacement2 = `) : (
                  project.icon ? (
                    <div className={\`h-48 flex items-center justify-center \${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'} border-b \${isDarkMode ? 'border-slate-700' : 'border-slate-200'}\`}>
                      <div className="transform transition-transform hover:scale-110 duration-300 drop-shadow-md">
                        {project.icon}
                      </div>
                    </div>
                  ) : null
                )}`;

// We have 1 instance of this specific project render logic block
const pos = content.indexOf(target1);
if (pos !== -1) {
    let before = content.substring(0, pos);
    let after = content.substring(pos + target1.length);
    
    const pos2 = after.indexOf(target2);
    if (pos2 !== -1) {
        let inside = after.substring(0, pos2);
        let finalAfter = after.substring(pos2 + target2.length);
        
        let newContent = before + replacement1 + inside + replacement2 + finalAfter;
        fs.writeFileSync('src/App.tsx', newContent);
        console.log("Success");
    } else {
        console.log("Failed pos 2");
    }
} else {
    console.log("Failed pos 1");
}

