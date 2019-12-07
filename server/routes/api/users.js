var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs')
const Users = require('../../models/Users')
const jwt = require('jsonwebtoken')
require('dotenv').config()

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
    console.log(req.body)
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
        const payload = {
            email: email,
            admin: false
        }
        jwt.sign(payload, process.env.SECRET, {
            algorithm: 'HS256',
            expiresIn: 40000
        }, (err, token) => {
            if (err) {
                res.status(401).json({
                    'errors': [{
                        'msg': 'could not sign token'
                    }]
                })
            } else {
                res.json({
                    token
                })
            }
        })

    } catch (error) {
        console.log(error.message)
        if (error.code === 11000) {
            res.json({
                'errors': [{
                    'msg': 'Please enter a different email adress, Email already exists'
                }]
            })
        }
        if (error.name === 'validationError') {
            res.json({
                'errors': [{
                    'msg': error.message
                }]
            })
        }



    }

})


module.exports = router