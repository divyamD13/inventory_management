// routes/products.js
const express = require('express');
const { addProduct, getProducts, updateProductQuantity } = require('../controllers/productController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

// All product routes are protected and require authentication.
router.route('/')
    .post(protect, addProduct) // POST /products 
    .get(protect, getProducts); // GET /products [cite: 5]

router.put('/:id/quantity', protect, updateProductQuantity); // PUT /products/{id}/quantity [cite: 3]

module.exports = router;