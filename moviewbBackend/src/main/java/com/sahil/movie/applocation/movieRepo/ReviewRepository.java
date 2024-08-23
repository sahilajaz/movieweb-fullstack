package com.sahil.movie.applocation.movieRepo;

import com.sahil.movie.applocation.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Long> {


    List<Review> findAllByMovieEntity_Id(Long id);

    void deleteByMovieEntity_Id(long id);
}
