module.exports = function(app){

    console.log('ROUTER MODULE STARTED');

    let testRoutes = require('../routes/test.routes');
    app.use('/test', testRoutes);

    let cmdRoutes = require('../routes/cmd.routes');
    app.use('/cmd', cmdRoutes);

};