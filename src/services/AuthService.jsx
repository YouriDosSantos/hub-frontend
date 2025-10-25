import { requestBackend } from "../utils/Requests";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import qs from "qs";

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

// --------------------------------------------------

// import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
// import { CredentialsDTO } from "/credentialsDTO";


// export function loginRequest(loginData: CredentialsDTO) {
    
//     const headers = {
//         "Content-Type": "application/x-www-form-urlencoded",
//         Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
//     };

//     console.log(headers);
// }