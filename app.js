const express = require('express');
const app = express();
const mongoose = require('mongoose');
// process.env.port es una variable de ambiente para el hosting
const port = process.env.PORT || 9000;
// requerimiento de framework dotenv para la lectura de archivos .env
require('dotenv').config();

// conexion a la DB
mongoose
// llamado a la cadena de conexion desede el archivo .env
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a MongoDB"))
    .catch((error) => console.error(error));

// rutas de la API
const mascotaRouter = require("./router/mascotas");

//middleware API
app.use(express.json());
app.use("/api", mascotaRouter);

app.get("/", (req, res) => {
    res.send("Bienvenido a nuestra API de mascotas con NodeJS")
});

app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
});