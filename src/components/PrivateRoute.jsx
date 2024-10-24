import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { LoginContext } from "../context/LoginProvider";

const PrivateRoute = () => {
	const { isLoggedIn } = useContext(LoginContext);

	const location = useLocation();
	if (!isLoggedIn) {
		return <Navigate to='/login' state={{ from: location }} replace />
	}
	if (location.pathname === '/') {
		return <Navigate to='/DashBoardPage' replace />
	}
	return <Outlet />;
}

export default PrivateRoute;