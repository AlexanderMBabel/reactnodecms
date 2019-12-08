const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
    userEmail: {
        type: String
    },
    title: {
        type: String
    },
    images: [{
        image: {
            type: Buffer
        },
        position: String
    }],
    textBlocks: [{
        textBlock: {
            type: String
        },
        position: String
    }]
})

module.exports = mongoose.model('Posts', postsSchema)