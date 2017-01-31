const meow = require('meow');

const cli = meow(`
    Usage
      $ meow <input>

    Options
      --rainbow, -r  Include a rainbow

    Examples
      $ meow hoge piyo --rainbow
`, {
    alias: {
        r: 'rainbow'
    }
});

console.log(cli.input, cli.flags);
