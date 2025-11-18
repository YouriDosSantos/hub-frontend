import axios from "axios";
import { BASE_URL } from "./system";
import { getAccessToken } from "../services/AuthService";

export function requestBackend(config) {
    // Only add Bearer token if not calling the token endpoint
    if (!config.url.includes("oauth2/token")) {
        const token = getAccessToken();
        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`
            };
        }
    }
    return axios({ ...config, baseURL: BASE_URL });
}


