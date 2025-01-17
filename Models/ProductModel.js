const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    plu:{
        type: Number,
        required: [true, "Auto generated"],
    },
    barcode:{
        type: Number,
        required: [true, "Scan or enter the barcode"],
    },
    name:{
        type: String,
        required: [true, "Scan or enter the barcode"],
    },
    description:{
        type: String,
    },
    department:{
        type: String,
        required: [true, "Enter the Department"],
    },
    subDepartment:{
        type: String,
        required: [true, "Enter the Sub-Department"],
    },
    price:{
        type: Number,  //  Number type can store both integers and decimal (floating-point) values.
        required: [true, "Enter the Price"],
    },
    stockQuantity:{
        type: Number,
    },
    expireDate:{
        type: Date
    },
})