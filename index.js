// #################################################
//                  I N D E X
// #################################################

const express = require("express");
const nodeCmd = require('node-cmd');
const packagejson = require('./package.json');
const app = express();
let PORT = 3000;

app.use(express.json());
require('./src/modules/router.module')(app);
// Définition des CORS
app.use((req,res,next) => {
    res.setHeader('Acces-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Acces-Control-Allow-Methods','GET, POST, PUT')
    next()
})

// Route helcheck
app.get('/healthcheck', function (req, res) {
    res.status(200).send({ 'success': 'OK', 'apiVersion': packagejson.version });
});

//lancement du serveur
let server = app.listen(PORT, ()=> {
    console.log('SERVER STARTED ON ' + PORT);
});

//test OK commande Windob
//var cmd=require('node-cmd');
//var process=cmd.run('node');
//console.log(process.pid);