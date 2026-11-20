package com.idk.hobby.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ThoughtNotFoundException.class)
    public ResponseEntity<String> ThoughtNotFoundExceptionHandler(ThoughtNotFoundException thoughtNotFoundException){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(thoughtNotFoundException.getMessage());
    }

    @ExceptionHandler(ThoughtDateException.class)
    public ResponseEntity<String> ThoughtDateExceptionHandler(ThoughtDateException thoughtDateException){
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(thoughtDateException.getMessage());
    }

}
