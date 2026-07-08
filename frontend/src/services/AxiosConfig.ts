import * as axios from "axios";

const baseURL = "/api"
const api = axios.create({
        baseURL: baseURL
    }
)

export default api;