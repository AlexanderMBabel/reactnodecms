const mongoose = require('mongoose')

const dashboardSchema = new mongoose.Schema({
    name: String,
    posts: [{
        title: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now()
        },
        body: String
    }],
    media: [{
            image: Buffer,
            name: String,
            alt: String
        }]

        ,
    themeInfo: [{
        style: {
            type: Map,
            of: String
        }
    }],
    pages: [{
        header: String,
        date: {
            type: Date,
            defualt: Date.now()
        },
        body: String,
        pageType: String,
        mainImage: Buffer

    }]
})