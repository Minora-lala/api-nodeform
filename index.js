// #################################################
//                  I N D E X
// #################################################

const express = require("express");
const app = express();
// Remplace l'utilisation de body-parser
app.use(express.json());
require('./src/modules/router.module')(app);
let PORT = 3000;
// Définition des CORS
app.use((req,res,next) => {
    res.setHeader('Acces-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Acces-Control-Allow-Methods','GET, POST, PUT')
    next()
})

app.get('/healthcheck', function (req, res) {
    res.status(200).send({ 'success': 'OK', 'apiVersion': packagejson.version });
});

let server = app.listen(PORT, ()=> {
    console.log('SERVER STARTED ON ' + PORT);
});