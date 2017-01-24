const chalk = require('chalk');

// 文字色指定

// 青い文字列
console.log(chalk.blue('This message is blue.'));

// 白い文字列（真っ白ではない、グレーに近い）
console.log(chalk.white('This message is white.'));



// 背景色指定

// 青い背景
console.log(chalk.bgYellow('This message is bgYellow.'));



// 修飾

// 太字
console.log(chalk.bold('This message is bold.'));

// 反転
console.log(chalk.inverse('This message is inverse.'));



// 組み合わせが可能

// 青文字/緑背景/太字
console.log(chalk.blue.bgGreen.bold('This message is blue/bgGreen/bold.'));