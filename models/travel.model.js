const { Schema, model } = require('mongoose');

const travelModel = new Schema({
    title: {
        type: String,
        required: false,
        minlength: 3
    },
    image: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})

module.exports = model('Trave', travelModel);