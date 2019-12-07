const jwt = require('jsonwebtoken')



require('dotenv').config()

module.exports = async function (req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');

    // Check if not token
    if (!token) {
        return res.status(401).json({
            msg: 'No token, authorization denied'
        });
    }

    // Verify token
    try {
        await jwt.verify(token, process.env.SECRET, (error, decoded) => {
            if (error) {
                res.status(401).json({
                    msg: 'Token is not valid'
                });
            } else {
                req.email = decoded.email;
                next();
            }
        });
    } catch (err) {
        console.error('something wrong with auth middleware')
        res.status(500).json({
            msg: 'Server Error'
        });
    }
};