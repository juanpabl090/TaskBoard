/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const isAuthenticated = localStorage.getItem('authResponse');
    if (!isAuthenticated.status === 200) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;
}

export default PrivateRoute;
