package com.example.proiect_IS.service.implementation;

import com.example.proiect_IS.model.Movie;
import com.example.proiect_IS.model.MovieReview;
import com.example.proiect_IS.model.User;
import com.example.proiect_IS.repository.MovieRepository;
import com.example.proiect_IS.repository.MovieReviewRepository;
import com.example.proiect_IS.repository.UserRepository;
import com.example.proiect_IS.service.MovieReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieReviewServiceImplementation implements MovieReviewService {
    @Autowired
    private MovieReviewRepository movieReviewRepository;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private MovieRepository movieRepository;


    @Override
    public MovieReview addReview(MovieReview movieReview) {
        User user = movieReview.getUser();
        Movie movie = movieReview.getMovie();

        movieReview.setUser(user);
        movieReview.setMovie(movie);
        return movieReviewRepository.save(movieReview);
    }

    @Override
    public List<MovieReview> findAll() {
        return movieReviewRepository.findAll();
    }

    @Override
    public List<MovieReview> findAllByUser(User user) {
        return movieReviewRepository.findAllByUser(user);
    }
}
