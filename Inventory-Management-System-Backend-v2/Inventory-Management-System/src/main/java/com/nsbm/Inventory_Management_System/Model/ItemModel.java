package com.nsbm.Inventory_Management_System.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Entity class representing the Item table in the database.
 * Maps item-related data including ID, name, description, category, and stock quantity.
 */
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Item")
public class ItemModel {
    @Id
    private int itemId;

    private String item_name;

    /** Item Description */
    private String description;

    /** Relevant Category Id */
    private int category_id;

    private int quantity_in_stock;
}
