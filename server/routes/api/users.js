var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs')
const Users = require('../../models/Users')

router.get('/', async (req, res) => {
    try {
        const userEmail = await Users.find({
            email: req.query.email
        }, ).select('-password')
        res.json(userEmail)
    } catch (error) {
        console.log(error)
    }

})



router.post('/', (req, res) => {
    const {
        email,
        password
    } = req.body
    let hashPassword = null
    if (password) {
        hashPassword = bcrypt.hashSync(password, 8)
    }
    let users = new Users({
        email: email,
        password: hashPassword
    })
    users.save()
})


module.exports = router