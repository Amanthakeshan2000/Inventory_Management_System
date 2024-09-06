package com.nsbm.Inventory_Management_System.Dto;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Data Transfer Object (DTO) for item information in the inventory management system.
 * This class is used to transfer item data between different layers of the application.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemDTO {
    @Id
    private int itemId;

    private String item_name;

    /** Item Description */
    private String description;

    /** Relevant Category Id */
    private int category_id;

    private int quantity_in_stock;
}
