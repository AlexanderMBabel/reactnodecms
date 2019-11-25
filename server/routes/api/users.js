var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs')
const Users = require('../../models/Users')

router.get('/', async (req, res, next) => {
    const userEmail = await Users.findOne({
        email: req.query.email
    }, [-password])
    res.json(useEmail)
})



router.post('/', (req, res, next) => {
    const {
        email,
        password
    } = req.body
    const hashPassword = null
    if (password) {
        hashPassword = bcrypt.hashSync(password, 8)
    }
    const users = new Users({
        email = email,
        password = hashPassword
    })
    users.save()
})

module.exports = router