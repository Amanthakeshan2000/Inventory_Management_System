package com.nsbm.Inventory_Management_System.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Entity class representing a User in the Inventory Management System.
 * This class maps to the corresponding table in the database and contains user details.
 */
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {

    /** Unique identifier for the user, mapped as the primary key. */
    @Id
    private int id;

    /** User's name. */
    private String name;

    /** User's first name. */
    private String fname;

    /** User's address. */
    private String address;
}
