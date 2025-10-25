import { requestBackend } from "../utils/Requests";

export const listContacts = () => {
  return requestBackend({ method: "GET", url: "/contacts" });
};

export const createContact = (contact) => {
  return requestBackend({ method: "POST", url: "/contacts", data: contact });
};

export const getContact = (contactId) => {
  return requestBackend({ method: "GET", url: `/contacts/${contactId}` });
};

export const updateContact = (contactId, contact) => {
  return requestBackend({ method: "PUT", url: `/contacts/${contactId}`, data: contact });
};

export const deleteContact = (contactId) => {
  return requestBackend({ method: "DELETE", url: `/contacts/${contactId}` });
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