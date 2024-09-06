package com.nsbm.Inventory_Management_System.Dto;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class SuppliersDTO {
    @Id
    private int id;

    private String name;
    private String contactEmail;
    private String contactPhone;
    private String address;
    private String city;
    private String state;
    private String postalCode;
    private String country;
    /**
     * The status of the supplier, indicating whether the supplier is active or inactive.
     * This field is required and cannot be null.
     */
    @Column(nullable = false)
    private String status;
}
