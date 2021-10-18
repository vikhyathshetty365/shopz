const jwt = require('jsonwebtoken')
const User = require('../model/User.js')
exports.isauth = async (req, res, next) => {

    const cookie = req.cookies.jwt


    if (!cookie) {
        res.json({ error: 'not authorized' })
        return
    }
    const decoded = jwt.verify(cookie, process.env.JWT_SECRET_KEY)

    req.user = await User.findById(decoded.id)

    next()


}

exports.isadmin = (roles) => {


    return (req, res, next) => {


        if (req.user.role !== roles) {
            res.status(403).json({ error: 'user access deneid' })
            return

        }
        next()
    }
}