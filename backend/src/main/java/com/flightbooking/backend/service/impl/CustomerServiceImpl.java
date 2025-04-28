package com.flightbooking.backend.service.impl;

import com.flightbooking.backend.dto.CustomerDTO;
import com.flightbooking.backend.entity.Customer;
import com.flightbooking.backend.exception.ResourceNotFoundException;
import com.flightbooking.backend.mapper.CustomerMapper;
import com.flightbooking.backend.repository.CustomerRepository;
import com.flightbooking.backend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service

public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public CustomerDTO createCustomer(CustomerDTO customerDTO) {
        Customer customer = CustomerMapper.mapToCustomer(customerDTO);
        Customer savedCustomer = customerRepository.save(customer);
        return CustomerMapper.mapToCustomerDTO(savedCustomer);
    }

    @Override
    public CustomerDTO getCustomerById(Long customerId) {
        Customer customer = customerRepository.findById(customerId).orElseThrow(()-> new ResourceNotFoundException("Customer does not exist with the given ID: " + customerId));
        return CustomerMapper.mapToCustomerDTO(customer);
    }

    @Override
    public List<CustomerDTO> getAllCustomers() {
        List<Customer> customers = customerRepository.findAll();
        return customers.stream().map((customer) -> CustomerMapper.mapToCustomerDTO(customer)).collect(Collectors.toList());
    }

    @Override
    public CustomerDTO updateCustomer(Long customerId, CustomerDTO updatedCustomer) {
        Customer customer = customerRepository.findById(customerId).orElseThrow(()-> new ResourceNotFoundException("Customer does not exist with the given ID: " + customerId));

        customer.setFirstName(updatedCustomer.getFirstName());
        customer.setLastName(updatedCustomer.getLastName());
        customer.setEmail(updatedCustomer.getEmail());

        Customer updatedCustomerObj = customerRepository.save(customer);
        return CustomerMapper.mapToCustomerDTO(updatedCustomerObj);
    }

    @Override
    public void deleteCustomer(Long customerId) {
        Customer customer = customerRepository.findById(customerId).orElseThrow(()-> new ResourceNotFoundException("Customer does not exist with the given ID: " + customerId));

        customerRepository.deleteById(customerId);
    }
}
