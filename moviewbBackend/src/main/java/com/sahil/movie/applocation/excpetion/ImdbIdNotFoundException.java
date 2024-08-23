package com.sahil.movie.applocation.excpetion;




public class ImdbIdNotFoundException extends RuntimeException {
    public ImdbIdNotFoundException(String imdbId) {
        super(String.format("Imdb Id not found: %s", imdbId));
    }
}
