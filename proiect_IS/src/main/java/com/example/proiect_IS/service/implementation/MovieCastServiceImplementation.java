package com.example.proiect_IS.service.implementation;

import com.example.proiect_IS.model.Actor;
import com.example.proiect_IS.model.Movie;
import com.example.proiect_IS.model.MovieCast;
import com.example.proiect_IS.repository.MovieCastRepository;
import com.example.proiect_IS.service.MovieCastService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieCastServiceImplementation implements MovieCastService {
    @Autowired
    private MovieCastRepository movieCastRepository;


    @Override
    public MovieCast addCast(MovieCast movieCast) {
        return movieCastRepository.save(movieCast);
    }

    @Override
    public List<MovieCast> findAll() {
        return movieCastRepository.findAll();
    }

    @Override
    public List<MovieCast> findAllByActor(Actor actor) {
        return movieCastRepository.findAllByActor(actor);
    }

    @Override
    public List<MovieCast> findAllByMovie(Movie movie) {
        return movieCastRepository.findAllByMovie(movie);
    }
}
