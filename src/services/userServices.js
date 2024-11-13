import axios from "axios";

const URL = "http://localhost:8081";

export const login = async (username, password) =>
	await axios.post(URL + "/sign-in", {
		username: username,
		password: password
	});

export const signUp = async (formData) => await axios.post(URL + "/sign-up", formData);