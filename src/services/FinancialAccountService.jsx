// src/services/FinancialAccountService.js
import { requestBackend } from "../utils/Requests";


// Change for Pagination
export const listFinancialAccounts = (page = 0, size = 5, sortBy = "id", direction = "asc", search = "") => {
  return requestBackend({ 
    method: "GET", 
    url: "/api/financial-accounts",
    params: { page, size, sortBy, direction, search}
    });
};

export const createFinancialAccount = (account) => {
  return requestBackend({ method: "POST", url: "/api/financial-accounts", data: account });
};

export const getFinancialAccount = (accountId) => {
  return requestBackend({ method: "GET", url: `/api/financial-accounts/${accountId}` });
};

export const updateFinancialAccount = (accountId, account) => {
  return requestBackend({ method: "PUT", url: `/api/financial-accounts/${accountId}`, data: account });
};

export const deleteFinancialAccount = (accountId) => {
  return requestBackend({ method: "DELETE", url: `/api/financial-accounts/${accountId}` });
};



// -------------------------------------------------------------------

// import axios from "axios";

// const REST_API_BASE_URL = "http://localhost:8080/api/financial-accounts";

// // simplified arrow function
// export const listFinancialAccounts = () => axios.get(REST_API_BASE_URL);

// export const createFinancialAccount = (financialAccount) => axios.post(REST_API_BASE_URL, financialAccount);

// export const getFinancialAccount = (financialAccountId) => axios.get(REST_API_BASE_URL + '/' + financialAccountId);

// export const updateFinancialAccount = (financialAccountId, financialAccount) => axios.put(REST_API_BASE_URL + '/' + financialAccountId, financialAccount);

// export const deleteFinancialAccount = (financialAccountId) => axios.delete(REST_API_BASE_URL + '/' + financialAccountId);