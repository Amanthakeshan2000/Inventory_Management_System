package com.nsbm.Inventory_Management_System.Exception;

// CustomException extends RuntimeException to handle business logic-related exceptions.
// This allows us to throw specific errors and handle them centrally.


public class CustomException extends RuntimeException {

    private static final long serialVersionUID = 1L;   // Ensures compatibility during serialization

    // Constructor for creating an exception with a custom error message.
    public CustomException(String message) {
        super(message);
    }

    // Overloaded constructor to create an exception with both a message and a root cause.
    public CustomException(String message, Throwable cause) {
        super(message, cause);
    }
}
