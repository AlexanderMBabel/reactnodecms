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



router.post('/', async (req, res) => {
    const {
        email,
        password,
        name
    } = req.body
    let hashPassword = null
    if (password) {
        hashPassword = bcrypt.hashSync(password, 8)
    }
    let users = new Users({
        email: email,
        name: name,
        password: hashPassword
    })
    try {
        await users.save()
        res.json('Registered successfully')
    } catch (error) {
        console.log(error)
        if (error.code === 11000) {
            res.json('Please enter a different email adress, Email already exists')
        }


    }

})


module.exports = router