module.exports = function(app){

    console.log('ROUTER MODULE STARTED');

    let jsonRoutes = require('../routes/json.routes');
    app.use('/json', jsonRoutes);

    let cmdRoutes = require('../routes/cmd.routes');
    app.use('/cmd', cmdRoutes);

};