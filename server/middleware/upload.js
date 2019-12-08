const multer = require('multer')

const upload = multer({
    limits: {
        fieldSize: 4 * 1024 * 1024
    }
})

module.exports = upload