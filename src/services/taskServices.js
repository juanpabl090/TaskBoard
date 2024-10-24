import axios from "axios";

const URL = "http://localhost:8081";

export const getAllTaskById = async (username, password, userId) =>
	await axios.get(URL + `/tasks/${userId}`, {
		auth: {
			username: username,
			password: password
		}
	});