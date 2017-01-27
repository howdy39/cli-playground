const touch = require('touch');

const filename = 'hoge.txt';
const options = {};
const cb = function() {
  console.log("callback");
};

touch(filename, options, cb);
