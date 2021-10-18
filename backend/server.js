
require('dotenv').config()
const connectDB = require('./config/connectDB.js')
const productroute = require('././routes/productroute.js')
const userRoute = require('./routes/userRoute.js')
const orderRoute = require('./routes/orderRoute')
const cookieparser = require('cookie-parser')
const app = require('./app.js')
connectDB()
app.use(cookieparser())
app.use('/api/v1/product', productroute)
app.use('/api/v1/user', userRoute)
app.use('/api/v1/order', orderRoute)


app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})