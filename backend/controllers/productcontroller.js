const Product = require('../model/product.js')

const ApiFeatures = require('../utils/Apifeatures.js')

exports.getproducts = async (req, res, next) => {

    try {
        const productcount = await Product.countDocuments()
        const apifeature = new ApiFeatures(Product.find(), req.query).search().filter().pagination(5)
        const products = await apifeature.query

        if (!products) {
            res.json({
                sucess: false,
                "message": "no products"
            })
            return
        }
        res.json({
            sucess: true,
            products: products,
            productcount
        })

    } catch (err) {
        console.log(err)
    }




}


//---admin
exports.createproduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)

        res.json({
            sucess: true,
            product: product
        })

    }
    catch (err) {
        console.log(err)
    }


}

exports.deleteproduct = async (req, res) => {


    const product = await Product.findById(req.params.id)

    if (!product) {
        res.json({
            sucess: false,
            message: "product not found"
        })
    }
    await product.remove()
    res.json({
        sucess: true,

    })

}

exports.updateproduct = async (req, res) => {

    let
        product = await Product.findById(req.params.id)

    if (!product) {
        res.json({
            success: "false",
            error: "product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })

    res.json({
        success: "true",
        product
    })
}

exports.productdetails = async (req, res) => {

    const product = await Product.findById(req.params.id)

    if (!product) {
        res.json({
            success: false,
            error: "product not found"
        })
    }

    res.json({
        success: true,
        product
    })

}

exports.createreview = async (req, res, next) => {

    const { rating, comment, prodId } = req.body

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment
    }

    const product = await Product.findById(ProdId)

    const isreviewed = product.reviews.forEach((e) => e.user.toString() === req.user._id.toString())
    if (isreviewed) {

        product.reviews.forEach((e) => {
            if (e.user.toString() === req.user._id.toString()) {
                e.rating = rating,
                    e.comment = comment
            }
            else {
                product.reviews.push(review)
                product.numOfReviews = product.reviews.length


            }
        })
    }


    let avg = 0;

    product.reviews.forEach((e) => {
        avg += e.rating;
    })

    product.ratings = avg / product.reviews.length

    await product.save({ validateBeforeSave: false })

    res.status(201).send({
        success: true,
    })
}


exports.getproductreview = async (req, res, next) => {

    const product = await Product.findById(req.query.id)

    if (!product) {
        res.status(401).json({ status: "no product found" })
        return
    }


    res.status(201).json({
        success: true,
        reviews: product.reviews
    })


}

exports.deletereview = async (req, res, next) => {

    const product = await Product.findById(req.query.prodid)

    if (!product) {

        res.status(401).json({ status: "no product found" })
    }


    const reviews = product.reviews.filter((e) => e._id.toString() !== req.query.id.toString());

    product.numOfReviews = reviews.length

    let avg = 0;


    reviews.forEach((e) => {
        avg += e.rating;
    })
    if (reviews.length == 0) {
        avg = 0
    }
    else {
        ratings = avg / product.reviews.length

    }

    const numOfReviews = reviews.length

    await Product.findByIdAndUpdate(req.query.prodid, {
        reviews,
        ratings,
        numOfReviews

    }, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })



}