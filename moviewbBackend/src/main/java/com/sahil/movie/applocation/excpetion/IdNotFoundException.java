package com.sahil.movie.applocation.excpetion;

public class IdNotFoundException extends Exception {
    public IdNotFoundException(long id) {
        super("ID not found: " + id);
    }

}
