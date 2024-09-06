package com.nsbm.Inventory_Management_System.Exception;

/**
 * Custom exception class to handle exceptions in the Inventory Management System.
 * Extends {@link RuntimeException} and adds an error code for more specific error handling.
 */
public class ExceptionHandle extends RuntimeException {

    /** Error code representing the specific type of error. */
    private int errorCode;

    /**
     * Retrieves the error code associated with this exception.
     *
     * @return the error code.
     */
    public int getErrorCode() {
        return errorCode;
    }

    /**
     * Provides a custom string representation of the exception,
     * including the error code and the message from the {@link RuntimeException}.
     *
     * @return a string containing the error code and message.
     */
    @Override
    public String toString() {
        return "InventoryException{" +
                "errorCode=" + errorCode +
                ", message=" + getMessage() +
                '}';
    }
}
