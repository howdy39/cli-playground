const ora = require('ora');

const spinner = ora('Loading hoge').start();

setTimeout(() => {
  spinner.succeed();

  const spinner_error = ora('Loading piyo').start();

  setTimeout(() => {
    spinner_error.fail();
  }, 1000);

}, 1000);
