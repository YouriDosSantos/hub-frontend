import { requestBackend } from "../utils/Requests";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import qs from "qs";
import * as AccessTokenRepository from "../components/AccessTokenRepository";
import * as userRepo from "../components/UserRepository";

export function loginRequest(loginData) {
    
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    };

    //x-www-form.urlencoded
    const requestBody = qs.stringify({ ...loginData, grant_type: "password" })

    //JSON
    // const requestBody = { ...loginData, grant_type: "password"};

    const config = {
        method: "POST",
        url: "oauth2/token",
        data: requestBody,
        headers: headers
    };
    

    console.log(headers);
    console.log(loginData);
    console.log(requestBody);

    return requestBackend(config);
}


export function logout() {
    AccessTokenRepository.remove(); //clear token
    userRepo.remove();              //clear user
}

export function saveAccessToken(token) {
    AccessTokenRepository.save(token);
}

export function getAccessToken() {
    return AccessTokenRepository.get();
}
