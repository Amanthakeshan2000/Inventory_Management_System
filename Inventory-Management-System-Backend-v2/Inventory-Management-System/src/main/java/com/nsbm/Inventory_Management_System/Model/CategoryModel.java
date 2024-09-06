package com.nsbm.Inventory_Management_System.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Entity class representing the Category table in the database.
 * Maps category-related data including ID, name, quantity, supplier, price, and description.
 */
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Category")
public class CategoryModel {
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
