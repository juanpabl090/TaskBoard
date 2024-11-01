import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LoginContext } from "../context/LoginProvider";

const PrivateRoute = () => {
	const { isLoggedIn } = useContext(LoginContext);
	const token = localStorage.getItem("token");

	if (!isLoggedIn || !token) {
		return <Navigate to='/login' replace />
	}
	return <Outlet />;
};

export default PrivateRoute;