const express = require('express');
const router = express.Router();
const fs = require("fs");


//router.post('/', testController.addTest);


// Gestion des routes et methodes
//POST REQUEST
router.post("/api/json", (req, res, next) => {
  // Formate les données 
  let data = JSON.stringify(req.body)
  //Création du fichier
  fs.writeFile("./src/assets/nouveauFichier.json", data , function (err) {
    if (err) throw err;
  });
    res.status(201).json({
      message: "insertion effectué avec succés",
    });
  });


module.exports = router;