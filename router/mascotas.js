const express = require('express');
const router = express.Router();

router.post("/mascotas", (req, res) => {
    res.send("creacion de mascotas")
})

module.exports = router;