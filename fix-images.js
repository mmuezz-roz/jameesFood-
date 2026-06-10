const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace fill inside <Image> tags to also include sizes
    let newContent = content.replace(/(<Image[^>]*?\s)fill(\s|>|className)/g, '$1fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"$2');
    
    if (content !== newContent) {
        fs.writeFileSync(file, newContent);
        console.log('Fixed sizes in', file);
    }
});
