package com.example.proiect_IS.service;

import com.example.proiect_IS.model.MovieReview;
import com.example.proiect_IS.model.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface MovieReviewService {
    MovieReview addReview(MovieReview movieReview);
    List<MovieReview> findAll();
    List<MovieReview> findAllByUserID(Long userID);
    void deleteReviewByUserId(Long userID);
}
