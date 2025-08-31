import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
  // Always allow access to all routes
  return <Outlet />;
};

export default ProtectedRoute;