package com.sahil.movie.applocation.controller;

import com.sahil.movie.applocation.model.Review;
import com.sahil.movie.applocation.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/review")
@CrossOrigin("http://localhost:5173/")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @PostMapping
    public void createReview(@RequestBody Map<String , String> payload) {
        reviewService.saveReview(payload);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public List<Review> getReviews(@PathVariable Long id) {
        return reviewService.getReviews(id);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteAll(@PathVariable long id) {
        reviewService.delete(id);
    }


}
