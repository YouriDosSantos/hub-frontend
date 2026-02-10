export function mapUserInfo(apiResponse) {

    if (!apiResponse){
        return {
            name: "", email: "", roles: []
        };
    }
    return {
        name: apiResponse.name,
        email: apiResponse.email,
        roles: apiResponse.roles || []
    };
}








// export type UserInfo = {
//     name: string;
//     email: string;
//     role: string;
// }