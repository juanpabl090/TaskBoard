import axios from "axios";

const URL = "http://localhost:8081";

export const login = async (username, password) =>
    await axios.get(URL + "/login", {
        auth: {
            username: username,
            password: password
        }
    });