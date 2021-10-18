const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/shopz",
        {
            useNewUrlParser: true,

            useUnifiedTopology: true
        }
    ).then(data => {
        console.log(`connected....${data.connection.host}`)
    });


}


module.exports = connectDB;