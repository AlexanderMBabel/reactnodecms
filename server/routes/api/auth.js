var express = require('express');
var router = express.Router();
const Users = require('../../models/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const auth = require('../../middleware/authMiddle')
const {
    check,
    validationResult
} = require('express-validator')

// @route  GET api/auth
// @desc   Check token
// @access Public

router.get('/', auth, async (req, res) => {
    try {
        const user = await Users.find({
            email: req.email
        }).select('-password')
        res.json(user)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }

})


router.post('/register', [check('email').isEmail().isEmpty().not(), check('password').isLength({
    min: 6
}).isEmpty().not()], async (req, res) => {
    const {
        email,
        password
    } = req.body;

    let storedPassword = null
    try {

        //get password from db based on user name
        storedPassword = await Users.find({
            email: email
        }).select(
            'password email'
        );



    } catch (error) {
        console.log(error);
    } finally {
        console.log(storedPassword[0])
        const payload = {
            "email": storedPassword[0].email,
            "Admin": false,
            "Exp": 1222333
        }
        console.log(password, storedPassword[0].password)
        const passwordsMatch = bcrypt.compareSync(password, storedPassword[0].password)
        if (passwordsMatch) {
            jwt.sign(
                payload,
                process.env.SECRET, {
                    algorithm: 'HS256',
                    expiresIn: 40000
                },
                (error, token) => {

                    if (error) {
                        console.log(error);
                    } else {
                        res.json(token);
                    }
                }
            );
        } else {
            res.staus(400).json("Login failed")
        }
    }


});
router.post('/login', async (req, res, next) => {

    const {
        password,
        email
    } = req.body
    console.log(password)
    let userInfo = null

    try {
        userInfo = await Users.find({
            email: email
        }).select('email password')
        console.log(userInfo)

        const passwordMatch = bcrypt.compareSync(password, userInfo[0].password)
        const payload = {
            email: userInfo[0].email,
            admin: false,

        }
        if (passwordMatch) {
            jwt.sign(payload, process.env.SECRET, {
                algorithm: 'HS256',
                expiresIn: 40000
            }, (err, token) => {
                if (err) {
                    res.status(401).json(err)
                } else {
                    console.log(token)
                    res.json(token)
                }
            })
        }
    } catch (error) {
        res.status(401).json('email doesnt exist')
    } finally {

    }
})

module.exports = router