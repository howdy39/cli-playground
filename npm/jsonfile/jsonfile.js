const jsonfile = require('jsonfile');
const file = 'manifest.json';
 
console.log(jsonfile.readFileSync(file));

const writeObj = {version: '1.1.5'};

jsonfile.writeFileSync(file, writeObj)

console.log(jsonfile.readFileSync(file));
