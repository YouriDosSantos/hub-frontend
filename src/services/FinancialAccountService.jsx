import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/financial-accounts";

// simplified arrow function
export const listFinancialAccounts = () => axios.get(REST_API_BASE_URL);

export const createFinancialAccount = (financialAccount) => axios.post(REST_API_BASE_URL, financialAccount);

export const getFinancialAccount = (financialAccountId) => axios.get(REST_API_BASE_URL + '/' + financialAccountId);

export const updateFinancialAccount = (financialAccountId, financialAccount) => axios.put(REST_API_BASE_URL + '/' + financialAccountId, financialAccount);

export const deleteFinancialAccount = (financialAccountId) => axios.delete(REST_API_BASE_URL + '/' + financialAccountId);