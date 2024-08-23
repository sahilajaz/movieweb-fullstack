package com.sahil.movie.applocation.controller;

import com.sahil.movie.applocation.excpetion.IdNotFoundException;
import com.sahil.movie.applocation.model.MovieEntity;
import com.sahil.movie.applocation.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/movies")
@CrossOrigin("http://localhost:5173/")
public class MovieController {
    @Autowired
    private MovieService service;
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<MovieEntity> getAllMovies() {
        return service.allMovies();
    }
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public MovieEntity getMovieById(@PathVariable Long id) throws IdNotFoundException {
        return service.movieById(id);
    }
    @GetMapping("/imbd/{imdbId}")
    @ResponseStatus(HttpStatus.OK)
    public MovieEntity getMovieByImbdId(@PathVariable String imdbId)  {
            return service.movieByImbdId(imdbId);

    }
}
