const express = require('express');
const { getproducts, createproduct, deleteproduct, updateproduct, productdetails } = require('../controllers/productcontroller.js')
const { isauth, isadmin } = require('../middleware/auth')
const router = express.Router();


router.route("/allproducts").get(getproducts)
router.route("/createproduct").post(isauth, isadmin("admin"), createproduct)
router.route("/:id").delete(deleteproduct).put(updateproduct).get(productdetails)

module.exports = router