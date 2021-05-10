const express = require('express');
const router = express.Router();
const cmd=require('node-cmd');

// Gestion des routes et methodes
//POST REQUEST
router.get("/getversion", (req, res, next) => {

//recuperation de la version de node

cmd.run('terraform -v',
    function(err, data, stderr){
        console.log('the node-cmd dir contains : ',data)
        next();
    }
);
res.status(201).json({
    message: "insertion effectué avec succés", data,
  });
});

module.exports = router;

