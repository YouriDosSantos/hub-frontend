import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";


export function loginRequest(loginData) {
    
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    };

    console.log(headers);
    console.log(loginData);
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