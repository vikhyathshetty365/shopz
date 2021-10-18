const Order = require('../model/orders.js')


exports.createOrder = async (req, res, next) => {

    const {
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body

    const order = await Oder.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id



    })

    res.status(201).json({ success: true, order })


}


exports.getSingleOrder = async (req, res, next) => {

    const order = await Order.findById(req.params.id)

    if (!order) {
        res.json({
            success: false,
            message: 'Order not found'
        })

        return
    }

    res.status(201).json({ success: true, order })
}

exports.myorder = async (req, res, next) => {


    const order = await Order.find({ user: req.user._id })

    if (!order) {
        res.json({
            success: false,
            message: 'Order not found'
        })

        return
    }

    res.status(201).json({ success: true, order })
}

exports.getAllorders = async (req, res, next) => {


    const order = await Order.find();

    if (!order) {
        res.status(201).json({ success: false, message: "orders not found" })
        return
    }
    res.json({ success: true, order })

}

exports.deleteorder = async (req, res, next) => {

    const order = await findById(req.params.id);

    if (!order) {
        res.status(404).json({ success: false, message: "order not found" })
        return
    }

    order.remove()

    res.status(201).json({ success: true, message: "successfully deleted" })
}