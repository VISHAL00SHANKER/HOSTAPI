const mongoose = require("mongoose");

uri = "mongodb+srv://vishal4153cs:RXYCRZhuiUjnnb7c@vishalapi.rbzjpnl.mongodb.net/VishalAPI?retryWrites=true&w=majority";

const connectDB = (uri) => {
    console.log("connect db");
    return mongoose.connect(uri,  );
};

module.exports = connectDB;