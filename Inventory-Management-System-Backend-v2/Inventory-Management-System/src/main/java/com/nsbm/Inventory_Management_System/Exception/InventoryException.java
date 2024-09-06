package com.nsbm.Inventory_Management_System.Exception;

/**
 * Custom exception class for handling inventory-related errors.
 * This exception extends the RuntimeException, allowing it to be
 * thrown during the normal operation of the application without
 * the need for explicit handling.
 */
public class InventoryException extends RuntimeException{
    private int errorCode;
    /**
     * Constructor to create a new InventoryException with a specific error message and code.
     *
     * @param message   The error message describing the cause of the exception.
     * @param errorCode A custom error code to represent different error types.
     */
    public InventoryException(String message, int errorCode) {
        super(message);
        this.errorCode = errorCode;
    }
    /**
     * Gets the custom error code associated with this exception.
     *
     * @return The error code.
     */
    public int getErrorCode() {
        return errorCode;
    }
    /**
     * Returns a string representation of the InventoryException,
     * including the error code and the message.
     *
     * @return A formatted string representing the exception details.
     */
    @Override
    public String toString() {
        return "InventoryException{" +
                "errorCode=" + errorCode +
                ", message=" + getMessage() +
                '}';
    }
}
