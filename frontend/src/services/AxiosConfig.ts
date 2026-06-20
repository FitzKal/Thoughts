import * as axios from "axios";

const baseURL = "/api/thoughts"
const api = axios.create({
        baseURL: baseURL
    }
)

export default api;