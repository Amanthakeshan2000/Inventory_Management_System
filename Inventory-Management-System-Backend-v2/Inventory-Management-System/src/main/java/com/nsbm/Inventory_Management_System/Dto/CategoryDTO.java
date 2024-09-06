package com.nsbm.Inventory_Management_System.Dto;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Data Transfer Object for Category.
 * This class is used to transfer category data between different layers of the application.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryDTO {
    @Id
    private  int category_id;

    /** Relevant Category */
    private String category;

    private int quantity;

    /** Relevant Supplier Id */
    private int supplier_id;

    /** Category Description */
    private String description;
}
