var express = require('express');
var router = express.Router();
const Users = require('../../models/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
router.get('/', async (req, res) => {
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

module.exports = router