//Dependance express pour le serveur et les routes et exec pour les chillprocess
const express = require('express');
const router = express.Router();
const { exec } = require('child_process');

// Gestion des routes et methodes
//recuperation de la version de terraform
router.get("/getversion", (req, res, next) => {
exec('terraform -v', (error, stdout, stderr) => {
    if (error) {
      // Si la commande ne se lance pas : 
      console.error(`Erreur avant la commande: ${error.message}`);
      return;
    }
    if (stderr) {
      //Si la commande renvoie une erreur :
      console.error(`Erreur durant la commande: ${stderr}`);
      return;
    }
    console.log(`stdout:\n${stdout}`);
    res.status(201).json({
        message: "Terraform est bien installé : ", stdout,
    });  
});
});

  //recuperation de la version de NodeJs
router.get("/getversionnode", (req, res, next) => {
  exec('node --version', (error, stdout, stderr) => {
      if (error) {
        console.error(`error: ${error.message}`);
        exec('apt install nodejs-legacy');
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout:\n${stdout}`);
      res.status(201).json({
          message: "insertion effectué avec succés", stdout,
      });  
  });
  });
module.exports = router;