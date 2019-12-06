const jwt = require('jsonwebtoken')

const Users = require('../models/Users')

require('dotenv').config()

const auth = async (req, res, next) => {
    const token = req.headers['x-auth-token']
    if (!token) {
        res.status(401).json({
            'errors': [{
                'msg': 'no token provided(change me)'
            }]
        })
    }
    try {
        await jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                res.status(401).json({
                    'errors': [{
                        'msg': 'token cant decode'
                    }]
                })
            } else {
                req.email = decoded.email
                next()
            }

        })
    } catch (err) {
        res.status(500).json({
            'msg': 'Server Error'
        })
    }

}

module.exports = auth