package com.nsbm.Inventory_Management_System.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Data Transfer Object (DTO) for user details.
 * This class is used to transfer user data between different layers of the application.
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDTO {

    /** Unique identifier for the user. */
    private int id;

    /** User's name. */
    private String name;

    /** User's first name */
    private String fname;

    /** User's address. */
    private String address;
}
