// src/components/Header.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Header = () => {
    const { logout } = useContext(AuthContext);

    return (
        // CORRECTED CODE
        <header className="bg-white shadow-md w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <h1 className="text-2xl font-bold text-gray-800">Inventory Management</h1>
                    <button
                        onClick={logout}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;