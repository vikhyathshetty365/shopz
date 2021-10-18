exports.sendToken = (user, res) => {

    const token = user.getJwt()
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    }
    res.status(200).cookie("jwt", token, options).json({
        success: true,
        token
    })
}