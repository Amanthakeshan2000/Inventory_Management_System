package com.nsbm.Inventory_Management_System.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import static com.nsbm.Inventory_Management_System.Const.Const.ERROR;

// This class globally handles exceptions thrown in the application using Spring's @ControllerAdvice.
// It allows for centralized handling of exceptions, so we don't need to write try-catch blocks everywhere.


@ControllerAdvice
public class GlobalExceptionHandler {

    // This method handles CustomException errors and returns a specific error message to the client.


    @ExceptionHandler(CustomException.class)
    public ResponseEntity<String> handleCustomException(CustomException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
    }


    // This method handles generic exceptions and returns a generic error message with a 500 Internal Server Error status.


    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGlobalException(Exception ex) {
        return new ResponseEntity<>(ERROR+ ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}