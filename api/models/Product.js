const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    img: {
        type: String, 
    },
    description: {
        type: String, 
    },
    features: {
        type: String, 
    },
    weight: {
        type: Number, 
    },
    price: {
        type: Number, 
        required: true,
        min: 0.99
    },
    quantity: {
        type: Number, 
        min: 0,
        default: 0
    },
    categories: {
        type: Array,
    },
    inStock: {
        type: Boolean, 
        default: true,
    },
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;