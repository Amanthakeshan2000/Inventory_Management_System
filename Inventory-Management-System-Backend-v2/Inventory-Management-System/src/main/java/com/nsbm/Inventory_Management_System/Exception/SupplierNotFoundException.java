package com.nsbm.Inventory_Management_System.Exception;

/**
 * Custom exception thrown when a supplier is not found.
 * This exception indicates that a supplier with a specified ID does not exist.
 */
public class SupplierNotFoundException extends RuntimeException {

    /**
     * Constructs a new {@code SupplierNotFoundException} with a detailed message.
     *
     * @param id The ID of the supplier that was not found.
     */
    public SupplierNotFoundException(int id) {
        super("Supplier not found with id " + id);
    }
}