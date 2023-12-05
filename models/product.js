const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true,
    },
    price : {
        type : Number,
        required : [true, "price must be provided"],
    },
    featured : {
        type: Boolean,
        default :false,
    },
    rating: {
        type : Number,
        default: 4.5,
    },
    createdAt : {
        type : Date,
        default : Date.now(),
    },
    company: {
        type : String,
        enum:{
            values: ["PANDORA", "SIGNET", "MALABAR", "KALYAN", "TANISHQ"],
            message : `{VALUE} is not supported`,
        },
    },
    image : String,
    
    description : {
        type : String,
        required: true,
    },
    color : {
        type : String
    }

});


// table in SQL
// collections in react

module.exports = mongoose.model("Product", productSchema);