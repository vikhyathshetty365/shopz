const User = require('../model/User.js')
const { sendToken } = require('../utils/sendToken.js')
exports.userRegister = async (req, res, next) => {

    const { name, email, password } = req.body;



    const user = await User.create({
        name, email, password, avatar: {
            public_id: "this is id",
            url: "demo url"
        }
    })



    sendToken(user, res)

}

exports.loginUser = async (req, res, next) => {

    const { email, password } = req.body

    const user = await User.findOne({ email: email }).select("+password")

    if (!user) {
        res.json({ message: 'invalid username or password' })
        return
    }

    const ismatch = await user.comparePassword(password)

    if (!ismatch) {
        res.json({ message: 'invalid username or password' })
        return
    }

    sendToken(user, res)


}

exports.logout = async (req, res, next) => {


    res.cookie("jwt", null, {
        expires: new Date(Date.now()),
        httpOnly: true,

    })

    res.json({
        message: "logged out",
        sucess: true,
    })
}
//----user
exports.getuserDetails = async (req, res, next) => {
    const user = await User.findById(req.user._id);


    if (!user) {
        res.status(404).json({
            error: "User not found"
        })
        return
    }

    res.status(201).json({
        success: true,
        user
    })

}

//--------admin


exports.getIndividual = async (req, res, next) => {

    const user = await User.findById(req.params.id);

    if (!user) {
        res.status(401).json({ message: "user not found" })
        return
    }

    res.json({
        success: true,
        user
    })
}


exports.updateProfile = async (req, res, next) => {

    const newdetails = {
        name: req.body.name,
        email: req.body.email
    }
    const user = await User.findByIdAndUpdate(req.user._id, newdetails, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })


    res.json({ success: true, user })
}


//---admin
exports.editAdmin = async (req, res, next) => {

    const newdetails = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }
    const user = await User.findByIdAndUpdate(req.user._id, newdetails, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })




    res.status(201).json({ success: true, user })
}

//-------admin
exports.deleteuser = async (req, res, next) => {

    const user = await User.findById(req.params.id)

    user.remove();

    res.status(200).json({ success: true })
}