import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/relationships";

//simplified arrow function
export const listRelationships = () => axios.get(REST_API_BASE_URL);

export const createRelationship = (relationship) => axios.post(REST_API_BASE_URL, relationship);

export const getRelationship = (id) => axios.get(REST_API_BASE_URL + '/' + id);

export const updateRelationship = (id, relationship) => axios.put(REST_API_BASE_URL + '/' + id, relationship);

export const deleteRelationship = (id) => axios.delete(REST_API_BASE_URL + '/' + id);