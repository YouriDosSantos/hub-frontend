import { requestBackend } from "../utils/Requests";

export const findMe = () => {   

    return requestBackend({ method: "GET", url: `/users/me/` });
};