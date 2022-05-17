const Product = require('../models/product.model');

module.exports = {
    
    getProducts: (req, res) => {
        Product.find()
        .then((allProducts) => {
            res.json(allProducts);
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong in findAll', error: err });
        });
    },
    
    createProduct: (req, res) => {
        Product.create(req.body)
        .then((newProduct) => {
            res.json(newProduct);
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong in create', error: err });
        });
    },
    
    getProductById: (req, res) => {
        Product.findOne({ _id: req.params.id })
        .then((oneProduct) => {
            res.json(oneProduct);
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong in findById', error: err });
        });
    },
    
    deleteProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong in delete', error: err });
        });
    },
    
    updateProduct: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then((updatedProduct) => {
            res.json(updatedProduct);
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong in update', error: err });
        });
    },
};