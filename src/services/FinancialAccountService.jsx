// src/services/FinancialAccountService.js
import { requestBackend } from "../utils/Requests";

export const listFinancialAccounts = () => {
  return requestBackend({ method: "GET", url: "/financial-accounts" });
};

export const createFinancialAccount = (account) => {
  return requestBackend({ method: "POST", url: "/financial-accounts", data: account });
};

export const getFinancialAccount = (accountId) => {
  return requestBackend({ method: "GET", url: `/financial-accounts/${accountId}` });
};

export const updateFinancialAccount = (accountId, account) => {
  return requestBackend({ method: "PUT", url: `/financial-accounts/${accountId}`, data: account });
};

export const deleteFinancialAccount = (accountId) => {
  return requestBackend({ method: "DELETE", url: `/financial-accounts/${accountId}` });
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