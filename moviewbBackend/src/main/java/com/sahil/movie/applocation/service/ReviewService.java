package com.sahil.movie.applocation.service;

import com.sahil.movie.applocation.model.MovieEntity;
import com.sahil.movie.applocation.model.Review;
import com.sahil.movie.applocation.movieRepo.MovieRepository;
import com.sahil.movie.applocation.movieRepo.ReviewRepository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MovieRepository movieRepository;


    public void saveReview(Map<String, String> payload) {
        Review review = new Review();
        review.setBody(payload.get("body"));
        MovieEntity movie = movieRepository.findByimdbId(payload.get("imbd"));
        review.setMovieEntity(movie);
        reviewRepository.save(review);
    }


    public List<Review> getReviews(Long id) {
        return reviewRepository.findAllByMovieEntity_Id(id);
    }


    @Transactional
    public void delete(long id) {
        reviewRepository.deleteByMovieEntity_Id(id);
    }
}
