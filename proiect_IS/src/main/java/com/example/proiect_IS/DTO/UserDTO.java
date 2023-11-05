package com.example.proiect_IS.DTO;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class UserDTO {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phoneNumber;
    private Boolean isAdmin;
    private Boolean isCustomer;
}
