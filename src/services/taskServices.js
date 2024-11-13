import axios from "axios";

export const getAllTaskById = async (token, id) => {
	const response = await axios.get(`tasks/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	});
	return response.data;
};

export const createTask = async (token, id, taskData) => {
	await axios.post(`tasks/${id}`, taskData, {
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
	});
};

export const editTask = async (token, idTask, taskData) => {
	await axios.patch(`tasks/${idTask}`, taskData, {
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
	});
};