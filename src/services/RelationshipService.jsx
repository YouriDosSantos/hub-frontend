// src/services/RelationshipService.js
import { requestBackend } from "../utils/Requests";

export const listRelationships = () => {
  return requestBackend({ method: "GET", url: "/api/relationships" });
};

export const createRelationship = (relationship) => {
  return requestBackend({ method: "POST", url: "/api/relationships", data: relationship });
};

export const getRelationship = (relationshipId) => {
  return requestBackend({ method: "GET", url: `/api/relationships/${relationshipId}` });
};

export const updateRelationship = (relationshipId, relationship) => {
  return requestBackend({ method: "PUT", url: `/api/relationships/${relationshipId}`, data: relationship });
};

export const deleteRelationship = (relationshipId) => {
  return requestBackend({ method: "DELETE", url: `/api/relationships/${relationshipId}` });
};


// -------------------------------------------------------------------

// import axios from "axios";

// const REST_API_BASE_URL = "http://localhost:8080/api/relationships";

// //simplified arrow function
// export const listRelationships = () => axios.get(REST_API_BASE_URL);

// export const createRelationship = (relationship) => axios.post(REST_API_BASE_URL, relationship);

// export const getRelationship = (id) => axios.get(REST_API_BASE_URL + '/' + id);

// export const updateRelationship = (id, relationship) => axios.put(REST_API_BASE_URL + '/' + id, relationship);

// export const deleteRelationship = (id) => axios.delete(REST_API_BASE_URL + '/' + id);