import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/customers';

export const getListCustomers = () => axios.get(REST_API_BASE_URL);

export const createCustomer = (customer) => axios.post(REST_API_BASE_URL, customer);

export const getCustomer = (customerID) => axios.get(REST_API_BASE_URL  + '/' + customerID)