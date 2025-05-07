package com.flightbooking.backend.controller;

import com.flightbooking.backend.dto.CustomerDTO;
import com.flightbooking.backend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/customers")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    //Build Add customer REST API
    @PostMapping
    public ResponseEntity<CustomerDTO> createCustomer(@RequestBody CustomerDTO customerDTO){
        CustomerDTO savedCustomer = customerService.createCustomer(customerDTO);
        return new ResponseEntity<>(savedCustomer, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    //Build Get Customer REST API
    public ResponseEntity<CustomerDTO> getCustomerById(@PathVariable("id") Long customerId) {
        CustomerDTO customerDTO = customerService.getCustomerById(customerId);
        return ResponseEntity.ok(customerDTO);
    }

    //Build Get All Customers REST API
    @GetMapping
    public ResponseEntity<List<CustomerDTO>> getAllCustomers() {
        List<CustomerDTO> customers = customerService.getAllCustomers();
        return ResponseEntity.ok(customers);
    }

    //Build update Customer REST API
    @PutMapping("{id}")
    public ResponseEntity<CustomerDTO> updateCustomer(@PathVariable("id") Long customerId, @RequestBody CustomerDTO updatedCustomer){
        CustomerDTO customerDTO = customerService.updateCustomer(customerId, updatedCustomer);
        return ResponseEntity.ok(customerDTO);
    }

    //Build delete Customer REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable("id") Long customerId) {
        customerService.deleteCustomer(customerId);
        return ResponseEntity.ok("Customer deleted successfully!");
    }

    //Build Get Login Credentials API
    @PostMapping("/login")
    public ResponseEntity<CustomerDTO> CustomerLogin(@RequestBody CustomerDTO loginDTO) {
        CustomerDTO customer = customerService.getCustomerLogin(loginDTO.getEmail(), loginDTO.getPassword());
        System.out.println("CUSTOMER   :  " + customer);
        if (customer == null) {
            // invalid credentials
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        return ResponseEntity.ok(customer);
    }
}
