const mongoose = require('mongoose');
const schema = mongoose.Schema;

const mascotaSchema = new schema({
    nombre:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    }
})

const Mascota = mongoose.model('mascota', mascotaSchema);
module.exports = Mascota;