import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/customers';

//Route to list all customers url
export const getListCustomers = () => axios.get(REST_API_BASE_URL);
//route to add a new customer/sign up url
export const createCustomer = (customer) => axios.post(REST_API_BASE_URL, customer);
//rout to update a customer url
export const getCustomer = (customerID) => axios.get(REST_API_BASE_URL  + '/' + customerID);
//route to udate customer url
export const updateCustomer = (customerID, customer) => axios.put(REST_API_BASE_URL + '/' + customerID, customer);
//route delete customner url
export const deleteCustomer = (customerID, customer) => axios.delete(REST_API_BASE_URL + '/' + customerID);
//route for customerlofin url
export const customerLogin = (email, password) => axios.post(REST_API_BASE_URL + '/login', { email, password });
// route for customer dashboard url
export const customerDashboard = (customerID) => axios.get(REST_API_BASE_URL + '/dashboard/' + customerID);