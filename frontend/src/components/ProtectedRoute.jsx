// src/components/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext.jsx';

const ProtectedRoute = ({ children }) => {
    const { token } = useContext(AuthContext);

    if (!token) {
        // User is not authenticated
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;