let express = require('express');
let router = express.Router();



//router.post('/', testController.addTest);


// Gestion des routes et methodes
//POST REQUEST
router.post("/api/json", (req, res, next) => {
    res.status(201).json({
      message: "insertion effectué avec succés",
    });
  });


module.exports = router;