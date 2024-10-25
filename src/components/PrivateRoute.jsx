import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LoginContext } from "../context/LoginProvider";

const PrivateRoute = () => {
	const { isLoggedIn } = useContext(LoginContext);
	if (!isLoggedIn) {
		return <Navigate to='/login' replace />
	}
	return <Outlet />;
}

export default PrivateRoute;