import { requestBackend } from "../utils/Requests";

//changed for pagination
export const listContacts = (page = 0, size = 5, sortBy = "id", direction = "asc", search = "") => {
  return requestBackend({ 
    method: "GET", 
    url: "/api/contacts" ,
    params: { page, size, sortBy, direction ,search }
  });
};

export const createContact = (contact) => {
  return requestBackend({ method: "POST", url: "/api/contacts", data: contact });
};

export const getContact = (contactId) => {
  return requestBackend({ method: "GET", url: `/api/contacts/${contactId}` });
};

export const updateContact = (contactId, contact) => {
  return requestBackend({ method: "PUT", url: `/api/contacts/${contactId}`, data: contact });
};

export const deleteContact = (contactId) => {
  return requestBackend({ method: "DELETE", url: `/api/contacts/${contactId}` });
};



// -------------------------------------------------------------
// import axios from "axios";

// const REST_API_BASE_URL = "http://localhost:8080/api/contacts";

// // simplified arrow function
// export const listContacts = () => axios.get(REST_API_BASE_URL);

// export const createContact = (contact) => axios.post(REST_API_BASE_URL, contact);

// export const getContact = (contactId) => axios.get(REST_API_BASE_URL + '/' + contactId);

// export const updateContact = (contactId, contact) => axios.put(REST_API_BASE_URL + '/' + contactId, contact);

// export const deleteContact = (contactId) => axios.delete(REST_API_BASE_URL + '/' + contactId);