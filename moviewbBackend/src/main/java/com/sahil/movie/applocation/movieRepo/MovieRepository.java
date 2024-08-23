package com.sahil.movie.applocation.movieRepo;

import com.sahil.movie.applocation.model.MovieEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import com.sahil.movie.applocation.model.MovieEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<MovieEntity, Long> {

    MovieEntity findByimdbId(String imdbId);
}

