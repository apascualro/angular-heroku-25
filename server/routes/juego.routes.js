module.exports = app => {
  const juegos = require("../controllers/juego.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", juegos.create);

  // Retrieve all Tutorials
  router.get("/", juegos.findAll);

  // Retrieve all published Tutorials
  router.get("/activo", juegos.findAllActive);

  // Retrieve a single Tutorial with id
  router.get("/:id", juegos.findOne);

  // Update a Tutorial with id
  router.put("/:id", juegos.update);

  // Delete a Tutorial with id
  router.delete("/:id", juegos.delete);

  // Delete all Juegos
  router.delete("/", juegos.deleteAll);

  app.use('/api/juegos', router);
};


// const express = require('express');
// const asyncHandler = require('express-async-handler');
// const userCtrl = require('../controllers/juego.controller.js');

// const router = express.Router();
// module.exports = router;


// router.route('/')
//   .post(asyncHandler(insert));


// async function insert(req, res) {
//   let juego = await juegoCtrl.insert(req.body);
//   res.json(juego);
// }