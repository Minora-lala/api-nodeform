//Gros test de commander via commander
const { program } = require('commander');
program.version('0.0.1');


program
  .option('-v, --version [type]', 'connaitre la version de terraform');

program.parse(process.argv);

const options = program.opts();
if (options.version === undefined) console.log('Terraform n\'est pas sur votre machine');
else if (options.version === true) console.log('add cheese');
else console.log(`add cheese type ${options.cheese}`);