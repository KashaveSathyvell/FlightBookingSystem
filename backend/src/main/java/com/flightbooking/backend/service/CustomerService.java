package com.flightbooking.backend.service;

import com.flightbooking.backend.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {
    CustomerDTO createCustomer(CustomerDTO customerDTO);

    CustomerDTO getCustomerById(Long customerId);

    List<CustomerDTO> getAllCustomers();

    CustomerDTO updateCustomer(Long customerId, CustomerDTO updatedCustomer);

    void deleteCustomer(Long employeeId);

    CustomerDTO getCustomerLogin(String email, String password);
}
