{/*import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(user.role)) {
    // Redirect to home if user role is not allowed
    return <Navigate to="/home" />;
  }

  // Render children if authenticated and role allowed
  return children;
};

export default ProtectedRoute;*/}
