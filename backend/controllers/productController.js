// controllers/productController.js
const Product = require('../models/product');

// @desc    Add a new product
// @route   POST /products
// @access  Private
const addProduct = async (req, res) => {
    const { name, type, sku, image_url, description, quantity, price } = req.body;
    
    if (!name || !type || !sku || !description || quantity === undefined || price === undefined) {
        return res.status(400).json({ message: 'Please fill all required fields' });
    }

    try {
        const productExists = await Product.findOne({ sku });
        if (productExists) {
            return res.status(409).json({ message: 'Product with this SKU already exists' });
        }

        const product = await Product.create({
            name, type, sku, image_url, description, quantity, price,
        });

        res.status(201).json({
            product_id: product._id, // As per test script expectation
            message: 'Product added successfully'
        });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Get all products with pagination
// @route   GET /products
// @access  Private
const getProducts = async (req, res) => {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;

    try {
        const products = await Product.find().skip(skip).limit(limit);
        res.status(200).json(products); // The test script expects a simple array
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Update product quantity
// @route   PUT /products/:id/quantity
// @access  Private
const updateProductQuantity = async (req, res) => {
    const { quantity } = req.body;

    if (quantity === undefined || typeof quantity !== 'number' || !Number.isInteger(quantity)) {
        return res.status(400).json({ message: 'Invalid quantity provided' });
    }

    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        product.quantity = quantity;
        const updatedProduct = await product.save();

        res.status(200).json(updatedProduct); // Return updated product details
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { addProduct, getProducts, updateProductQuantity };