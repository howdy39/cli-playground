const Manifest = require('chrome-manifest');
const manifest = new Manifest('manifest.json');

console.log(manifest.toString());

const newVersion = '1.1.5';
manifest.patch(newVersion);

console.log(manifest.toString());
