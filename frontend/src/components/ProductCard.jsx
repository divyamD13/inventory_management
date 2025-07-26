// src/components/ProductCard.jsx
import React, { useState } from 'react';
import api from '../services/api';
import toast from 'react-hot-toast';

const ProductCard = ({ product, onUpdate }) => {
    const [newQuantity, setNewQuantity] = useState(product.quantity);

    const handleUpdateQuantity = async (e) => {
        e.preventDefault();
        const quantity = parseInt(newQuantity, 10);
        if (isNaN(quantity) || quantity < 0) {
            toast.error('Please enter a valid quantity.');
            return;
        }
        try {
            await api.put(`/products/${product._id}/quantity`, { quantity });
            toast.success(`Quantity for ${product.name} updated!`);
            onUpdate(); // Refresh the product list
        } catch (error) {
            toast.error('Failed to update quantity.');
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src={product.image_url || 'https://via.placeholder.com/400x300'} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">SKU: {product.sku}</p>
                <p className="text-gray-600 text-sm flex-grow">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                    <p className="text-lg font-semibold text-indigo-600">${product.price.toFixed(2)}</p>
                    <p className="text-md font-medium text-gray-700">In Stock: {product.quantity}</p>
                </div>
            </div>
            <div className="p-4 bg-gray-50 border-t">
                <form onSubmit={handleUpdateQuantity} className="flex items-center gap-2">
                    <input
                        type="number"
                        value={newQuantity}
                        onChange={(e) => setNewQuantity(e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        placeholder="New Qty"
                    />
                    <button type="submit" className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-1 px-3 rounded-md text-sm">Update</button>
                </form>
            </div>
        </div>
    );
};

export default ProductCard;