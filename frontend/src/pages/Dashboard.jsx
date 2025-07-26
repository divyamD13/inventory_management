// src/pages/Dashboard.jsx
import React, { useState, useEffect, useCallback } from 'react';
import api from '../services/api';
import toast from 'react-hot-toast';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const initialFormState = { name: '', type: '', sku: '', description: '', image_url: '', price: '', quantity: '' };

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newProduct, setNewProduct] = useState(initialFormState);

    const fetchProducts = useCallback(async () => {
        try {
            const response = await api.get('/products');
            setProducts(response.data);
        } catch (error) {
            toast.error('Failed to fetch products.');
        }
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            await api.post('/products', {
                ...newProduct,
                price: parseFloat(newProduct.price),
                quantity: parseInt(newProduct.quantity, 10),
            });
            toast.success('Product added successfully!');
            setNewProduct(initialFormState);
            setShowAddForm(false);
            fetchProducts();
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to add product.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto p-4 md:p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-700">Products</h2>
                    <button
                        onClick={() => setShowAddForm(!showAddForm)}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
                    >
                        {showAddForm ? 'Cancel' : '＋ Add Product'}
                    </button>
                </div>

                {showAddForm && (
                    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                        <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Form fields */}
                            <input name="name" value={newProduct.name} onChange={handleInputChange} placeholder="Product Name" required className="p-2 border rounded" />
                            <input name="type" value={newProduct.type} onChange={handleInputChange} placeholder="Type (e.g., Electronics)" required className="p-2 border rounded" />
                            <input name="sku" value={newProduct.sku} onChange={handleInputChange} placeholder="SKU" required className="p-2 border rounded" />
                            <input name="image_url" value={newProduct.image_url} onChange={handleInputChange} placeholder="Image URL" className="p-2 border rounded" />
                            <input name="price" type="number" value={newProduct.price} onChange={handleInputChange} placeholder="Price" required className="p-2 border rounded" />
                            <input name="quantity" type="number" value={newProduct.quantity} onChange={handleInputChange} placeholder="Initial Quantity" required className="p-2 border rounded" />
                            <textarea name="description" value={newProduct.description} onChange={handleInputChange} placeholder="Description" required className="p-2 border rounded md:col-span-2"></textarea>
                            <button type="submit" className="w-full md:col-span-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">Add Product</button>
                        </form>
                    </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.length > 0 ? (
                        products.map(product => (
                            <ProductCard key={product._id} product={product} onUpdate={fetchProducts} />
                        ))
                    ) : (
                        <p className="text-gray-500 col-span-full text-center">No products found. Add one to get started!</p>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;