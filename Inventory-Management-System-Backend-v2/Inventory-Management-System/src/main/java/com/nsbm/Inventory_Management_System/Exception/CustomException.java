package com.nsbm.Inventory_Management_System.Exception;

public class CustomException extends RuntimeException {

    /**
     * Constructor that accepts a custom exception message.
     *
     * @param message the detail message about the exception
     */
    public CustomException(String message) {
        super(message); // Passes the message to the RuntimeException constructor
    }

    /**
     * Constructor that accepts a custom message and a cause.
     *
     * @param message the detail message about the exception
     * @param cause   the cause of the exception (can be another exception)
     */
    public CustomException(String message, Throwable cause) {
        super(message, cause); // Passes the message and the cause to the RuntimeException constructor
    }
}