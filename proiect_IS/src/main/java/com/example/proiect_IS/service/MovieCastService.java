package com.example.proiect_IS.service;

import com.example.proiect_IS.model.Actor;
import com.example.proiect_IS.model.Movie;
import com.example.proiect_IS.model.MovieCast;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface MovieCastService {
    MovieCast addCast(MovieCast movieCast);
    List<MovieCast> findAll();
    List<MovieCast> findAllByActor(Actor actor);
    List<MovieCast> findAllByMovie(Movie movie);
    void deleteCastByMovie(Movie movie);
}
