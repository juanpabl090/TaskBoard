/* eslint-disable react/prop-types */
import { jwtDecode } from 'jwt-decode';
import { createContext, useEffect, useState } from 'react';
const LoginContext = createContext();

const isTokenExpired = (token) => {
	try {
		const decoded = jwtDecode(token);
		const currentTime = Math.floor(new Date().getTime() / 1000);
		return decoded.exp < currentTime;
	} catch (error) {
		console.error(error);
		return true;
	}
};

const LoginProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(() => {
		const token = localStorage.getItem('token');
		return token && !isTokenExpired(token);
	});

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!isTokenExpired(token)) {
			setIsLoggedIn(true);
		} else {
			logOut();
		}
	}, []);

	const logIn = (token, navigate) => {
		localStorage.setItem("token", token);
		setIsLoggedIn(true);
		navigate('/DashBoardPage', { replace: true })
	}

	const logOut = () => {
		localStorage.removeItem("token");
		setIsLoggedIn(false);
	}

	return (
		<LoginContext.Provider value={{ isLoggedIn, logIn, logOut, isTokenExpired }}>
			{children}
		</LoginContext.Provider>
	);
}

export { LoginContext, LoginProvider };
export default LoginProvider;