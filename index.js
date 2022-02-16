const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');

program
  .name('randompass')
  .version('1.0.0')
  .description('CLI Password Generator');

program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to passwords.txt')
  .option('-nn, --no-numbers', 'remove numbers from password')
  .option('-ns, --no-symbols', 'remove symbols from password')
  .parse();

const { length, save, numbers, symbols } = program.opts();

console.log(program.opts());

// Generate random password
const randomPassword = createPassword(length, numbers, symbols);

// Save password to a file
if (save) savePassword(randomPassword);

// Copy password to clipboard
clipboardy.writeSync(randomPassword);

// Log password
console.log(chalk.cyan('🔄 Random password: ') + chalk.bold(randomPassword));
console.log(
  chalk.magenta('Password copied to ' + chalk.magenta.bold('clipboard 😺'))
);
