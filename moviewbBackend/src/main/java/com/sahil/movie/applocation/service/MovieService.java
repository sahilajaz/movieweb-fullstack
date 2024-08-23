package com.sahil.movie.applocation.service;

import com.sahil.movie.applocation.excpetion.IdNotFoundException;
import com.sahil.movie.applocation.excpetion.ImdbIdNotFoundException;
import com.sahil.movie.applocation.model.MovieEntity;
import com.sahil.movie.applocation.movieRepo.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;


    public List<MovieEntity> allMovies() {
        return  movieRepository.findAll();
    }

    public MovieEntity movieById(Long id) throws IdNotFoundException {
        return movieRepository.findById(id)
                .orElseThrow(() -> new IdNotFoundException(id));
    }

    public MovieEntity movieByImbdId(String imdbId) {

            MovieEntity movieByImbdId = movieRepository.findByimdbId(imdbId);
            if(movieByImbdId == null) {
                throw  new ImdbIdNotFoundException(imdbId);
            }
            return movieByImbdId;

    }
}

