const express = require('express');
const Mascota = require('../models/mascota');
const router = express.Router();

router.post("/mascotas", (req, res) => {
    //res.send("creacion de mascotas")
    const mascota = Mascota(req.body);
    mascota
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
})

module.exports = router;