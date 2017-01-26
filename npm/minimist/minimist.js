// node npm/minimist/minimist.js -a hoge -b piyo --c fuga

const parseArgs = require('minimist');

const argv = parseArgs(process.argv, opts = {});

console.log(argv);
/*
{ _: 
   [ '/Users/howdy/.nodebrew/node/v6.5.0/bin/node',
     '/Users/howdy/VscodeProjects/cli-sandbox/npm/minimist/minimist.js' ],
  a: 'hoge',
  b: 'piyo',
  c: 'fuga' }
*/
