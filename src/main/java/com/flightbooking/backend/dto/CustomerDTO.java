package com.flightbooking.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class CustomerDTO {
    private long customerId;
    private String firstName;
    private String lastName;
    private String email;
}
