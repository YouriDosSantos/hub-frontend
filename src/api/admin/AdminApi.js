import { requestBackend } from "../../utils/requests";

export function getAllUsers() {
    return requestBackend({ method: "GET", url: "/api/admin/users"});
}

export function getAllRoles() {
  return requestBackend({ method: "GET", url: "/api/admin/roles"});
}

export function updateUserName(id, name) {
    return requestBackend({ 
        method: "PUT", 
        url: `/api/admin/users/${id}/name`, 
        data: { name }});
}

export function updateUserEmail(id, email) {
  return requestBackend({
    method: "PUT",
    url: `/api/admin/users/${id}/email`,
    data: { email }
  });
}

export function updateUserRoles(id, roles) {
  return requestBackend({
    method: "PUT",
    url: `/api/admin/users/${id}/roles`,
    data: { roles }
  });
}

