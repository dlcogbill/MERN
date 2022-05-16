const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Product Title is required!'],
            maxlength: [40, 'Title must be 40 characters max!'],
        },
        price: {
            type: Number,
            required: [true, 'A Price is required!'],
        },
        description: {
            type: String,
            required: [true, 'A product description is required!'],
            
        }
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;