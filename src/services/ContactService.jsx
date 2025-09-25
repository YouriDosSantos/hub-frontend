import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/contacts";

// simplified arrow function
export const listContacts = () => axios.get(REST_API_BASE_URL);

export const createContact = (contact) => axios.post(REST_API_BASE_URL, contact);

export const getContact = (contactId) => axios.get(REST_API_BASE_URL + '/' + contactId);

export const updateContact = (contactId, contact) => axios.put(REST_API_BASE_URL + '/' + contactId, contact);

export const deleteContact = (contactId) => axios.delete(REST_API_BASE_URL + '/' + contactId);