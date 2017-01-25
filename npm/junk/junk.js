const junk = require('junk');

// 単純に調べる用途

// ジャンクファイルかどうかを調べる
console.log(junk.is('hoge')); // -> false
console.log(junk.is('.DS_Store')); // -> true

// ジャンクファイルでないかどうかを調べる
console.log(junk.not('hoge')); // -> true
console.log(junk.not('.DS_Store')); // -> false


// 絞り込む用途

const files = ['hoge', 'piyo', '.DS_Store', 'Thumbs.db', 'fuga'];

// ジャンクファイルで絞る
console.log(files.filter(junk.is)); // -> [ '.DS_Store', 'Thumbs.db' ]

// ジャンクファイルではないもので絞る
console.log(files.filter(junk.not)); // -> [ 'hoge', 'piyo', 'fuga' ]

