const express = require('express');
const Mascota = require('../models/mascota');
const router = express.Router();

/* insercion de datos desde la API */

router.post("/mascotas", (req, res) => {
    //res.send("creacion de mascotas")
    const mascota = Mascota(req.body);
    mascota
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
})

/* consulta de datos desde la API */

router.get("/mascotas", (req, res) => {
    Mascota
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

/* consulta de un dato desde la API */

router.get("/mascotas/:id", (req, res) => {
    const {id} = req.params;
    Mascota
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

/* edicion de un dato desde la API */

router.put("/mascotas/:id", (req, res) => {
    const {id} = req.params;
    const {nombre, descripcion} = req.body;
    Mascota
        .updateOne({_id: id}, {$set:{nombre, descripcion}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

/* eliminacion de un dato desde la API */

router.delete("/mascotas/:id", (req, res) =>{
    const{id} = req.params;
    Mascota
        .deleteOne({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

module.exports = router;