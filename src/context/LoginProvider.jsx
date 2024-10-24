/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState([]);
	return (
		<LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
			{children}
		</LoginContext.Provider>
	);
}

export { LoginContext, LoginProvider };