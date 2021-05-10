const nodeCmd = require('node-cmd');

//Windows    
var cmd=require('node-cmd');
 
var process=cmd.run('node');
console.log(process.pid);