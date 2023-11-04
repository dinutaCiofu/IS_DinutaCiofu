package com.example.proiect_IS.service.implementation;

import com.example.proiect_IS.model.Actor;
import com.example.proiect_IS.model.Movie;
import com.example.proiect_IS.repository.ActorRepository;
import com.example.proiect_IS.repository.MovieRepository;
import com.example.proiect_IS.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MovieServiceImplementation implements MovieService {
    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private ActorRepository actorRepository;

    @Override
    public Movie findMovieById(Long id) {
        return movieRepository.findMovieById(id);
    }

    @Override
    public Movie saveMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    @Override
    public Movie findMovieByTitle(String title) {
        return movieRepository.findMovieByTitle(title);
    }

    @Override
    public List<Movie> findAllMovies() {
        return movieRepository.findAll();
    }

    @Override
    public List<Movie> findMoviesByGenre(String genre) {
        return movieRepository.findAllByGenre(genre);
    }

    @Override
    public List<Movie> findMoviesByCategory(String category) {
        return movieRepository.findAllByCategory(category);
    }

    @Override
    public Movie updateMovieCast(Long movieId, List<Long> actorIds) {
        Movie movie = movieRepository.findMovieById(movieId);
        if (movie != null) {
            List<Actor> actors = actorRepository.findAllByIdIn(actorIds);
            movie.setCast(new ArrayList<>(actors));
            try {
                return movieRepository.save(movie);

            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return null;
    }

    @Override
    public Movie updateMovie(Long id, Movie movie) {
        Movie movieBD = movieRepository.findMovieById(id);
        if(movieBD != null){
            movieBD.setReviews(movie.getReviews());
            try{
                return movieRepository.save(movieBD);
            }catch (Exception e){
                e.printStackTrace();
            }
        }
        return null;
    }
}
