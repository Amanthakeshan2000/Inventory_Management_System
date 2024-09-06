package com.nsbm.Inventory_Management_System.Exception;

/**
 * Custom exception thrown when a procurement request is not found.
 * This exception is used to indicate that a procurement with a specified ID does not exist.
 */
public class ProcurementNotFoundException extends RuntimeException {

    /**
     * Constructs a new {@code ProcurementNotFoundException} with a detailed message.
     *
     * @param id The ID of the procurement request that was not found.
     */
    public ProcurementNotFoundException(int id) {
        super("Procurement not found with id " + id);
    }
}