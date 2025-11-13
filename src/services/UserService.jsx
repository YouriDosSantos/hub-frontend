import { requestBackend } from "../utils/Requests";

export const findMe = () => {   

    return requestBackend({ method: "GET", url: `/api/users/me` });
};

export function mapUserInfo(apiResponse) {
    if(!apiResponse) {
        return { name: "", email: "", roles: []};
    }

    return {
        name: apiResponse.name,
        email:apiResponse.email,
        roles: apiResponse.roles || []
    };
}