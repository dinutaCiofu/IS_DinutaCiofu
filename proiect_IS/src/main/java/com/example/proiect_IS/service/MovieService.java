package com.example.proiect_IS.service;

import com.example.proiect_IS.model.Movie;
import com.example.proiect_IS.model.MovieCast;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface MovieService {
    Movie saveMovie(Movie movie);
    Movie findMovieByTitle(String title);
    List<Movie> findAllMovies();
    List<Movie> findMoviesByGenre(String genre);
    List<Movie> findMoviesByCategory(String category);
//    List<MovieCast> updateMovieCast(Long movieId, List<Long> actorIds);
    Movie updateMovie(Long id, Movie movie);
    void deleteMovieById(Long id);
}
