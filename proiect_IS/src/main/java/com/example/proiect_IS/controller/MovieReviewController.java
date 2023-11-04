package com.example.proiect_IS.controller;

import com.example.proiect_IS.model.MovieReview;
import com.example.proiect_IS.model.User;
import com.example.proiect_IS.service.implementation.MovieReviewServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
public class MovieReviewController {
    private final MovieReviewServiceImplementation movieReviewServiceImplementation;

    @PostMapping("/addReview")
    public MovieReview addMovieReview(@RequestBody MovieReview movieReview){
        return movieReviewServiceImplementation.addReview(movieReview);
    }

    @GetMapping("/displayReviews")
    public List<MovieReview> displayReviews(){
        return movieReviewServiceImplementation.findAll();
    }

    @GetMapping("/findReviewByUser")
    public List<MovieReview> findReviewByUser(@RequestBody User user){
        return movieReviewServiceImplementation.findAllByUser(user);
    }
}
