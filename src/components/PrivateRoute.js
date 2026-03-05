import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ login, children }) => {

  if (!login) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;