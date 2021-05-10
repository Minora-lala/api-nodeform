let express = require('express');
let cors = require('cors');

let app = express();

//let Test = require('./src/models/test');
//let User = require('./src/models/user');

const packagejson = require('./package.json');
let PORT = 3000;


app.use(cors());
//require('./src/modules/router.module')(app);

// API HEALTH CHECK
app.get('/healthcheck', function (req, res) {
    res.status(200).send({ 'success': 'OK', 'apiVersion': packagejson.version });
});

let server = app.listen(PORT, ()=> {
    console.log('SERVER STARTED ON ' + PORT);
});
