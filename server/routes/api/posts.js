const express = require('express')
const router = express.Router()
const Posts = require('../../models/Posts')

router.get('/', async (req, res, next) => {

    try {
        const results = await Posts.find({
            userEmail: req.query.email
        })
        res.json(results)
    } catch (err) {
        res.status(401).json(err)
    }
})

router.post('/', async (req, res, next) => {
    const {
        email,
        title,
        textBlocks,
        images
    } = req.body

    let post = new Posts({
        userEmail: email,
        title: title,
        textBlocks: textBlocks

    })

    try {
        await post.save()
        res.json(post)

    } catch (err) {
        console.log(err)
    }
})

module.exports = router