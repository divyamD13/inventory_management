// src/components/Header.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Header = () => {
    const { logout } = useContext(AuthContext);

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Inventory Management</h1>
                <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
                >
                    Logout
                </button>
            </div>
        </header>
    );
};

export default Header;