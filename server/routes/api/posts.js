const express = require('express')
const router = express.Router()
const Posts = require('../../models/Posts')
const upload = require('../../middleware/upload')



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

router.post('/', upload.single('image'), async (req, res, next) => {
    const {
        userEmail,
        title,
        textBlocks,
        image
    } = req.body

    console.log()

    const imageArr = [{
        image: req.file,
        position: '2'
    }]

    let post = new Posts({
        userEmail: userEmail,
        title: title,
        textBlocks: textBlocks,
        images: imageArr

    })

    try {
        await post.save()
        res.json(post)

    } catch (err) {
        console.log(err)
    }
})

module.exports = router