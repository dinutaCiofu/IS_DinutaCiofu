package com.example.proiect_IS.repository;

import com.example.proiect_IS.model.MovieReview;
import com.example.proiect_IS.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieReviewRepository extends CrudRepository<MovieReview, Long> {
    MovieReview save(MovieReview movieReview);
    List<MovieReview> findAll();
    List<MovieReview> findAllByUser(User user);
}
