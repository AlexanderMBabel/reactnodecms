const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6

    }
})

module.exports = mongoose.model('Users', userSchema)