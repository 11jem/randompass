const fs = require('fs');
const path = require('path');
const os = require('os');
const chalk = require('chalk');

const savePassword = password => {
  fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 666, (e, id) => {
    fs.write(id, password + os.EOL, null, 'utf-8', () => {
      fs.close(id, () => {
        console.log(
          chalk.blue(
            'Password saved to ' +
              chalk.green.underline('passwords.txt') +
              chalk.yellow(' ✔')
          )
        );
      });
    });
  });
};

module.exports = savePassword;