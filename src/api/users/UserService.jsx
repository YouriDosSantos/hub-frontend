import { requestBackend } from "../../utils/requests";

export const findMe = () => {   

    return requestBackend({ method: "GET", url: `/api/users/me` });
};

export function mapUserInfo(apiResponse) {
    if(!apiResponse) {
        return { name: "", email: "", roles: [], mustChangePassword: false};
    }

    return {
        name: apiResponse.name,
        email:apiResponse.email,
        roles: apiResponse.roles || [],
        mustChangePassword: !!apiResponse.mustChangePassword
    };
}