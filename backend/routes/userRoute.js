const express = require('express')
const router = express.Router()
const { userRegister, loginUser, logout, getuserDetails, getIndividual, updateProfile, deleteuser } = require('../controllers/userController.js')
const { isauth, isadmin } = require('../middleware/auth.js')

router.route('/register').post(userRegister)
router.route('/login').post(loginUser)
router.route('/logout').post(logout)
router.route("/getindividual/:id").get(isauth, isadmin("admin"), getIndividual)
router.route('/userdetails').get(isauth, getuserDetails)
router.route('/updateprofile').put(isauth, updateProfile)
router.route('/deleteuser/:id').delete(isauth, isadmin("admin"), deleteuser)



module.exports = router