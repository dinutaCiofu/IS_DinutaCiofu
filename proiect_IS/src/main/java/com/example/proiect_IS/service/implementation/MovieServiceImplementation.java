package com.example.proiect_IS.service.implementation;

import com.example.proiect_IS.model.Actor;
import com.example.proiect_IS.model.Broadcast;
import com.example.proiect_IS.model.Movie;
import com.example.proiect_IS.model.MovieCast;
import com.example.proiect_IS.repository.*;
import com.example.proiect_IS.service.MovieService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class MovieServiceImplementation implements MovieService {
    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private ActorRepository actorRepository;
    @Autowired
    private MovieCastRepository movieCastRepository;
    @Autowired
    private BroadcastRepository broadcastRepository;
    @Autowired
    private ReservationRepository reservationRepository;

    @Override
    public Movie saveMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    @Override
    public Movie findMovieByTitle(String title) {
        return movieRepository.findMovieByTitle(title);
    }

    @Override
    public Movie findMovieById(Long id) {
        return movieRepository.findById(id).get();
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
    @Transactional
    public Movie updateMovie(Long id, Movie movie) {
        Movie updatedMovie = movieRepository.findById(id).get();
        if (updatedMovie != null) {
            updatedMovie.setTitle(movie.getTitle());
            updatedMovie.setCategory(movie.getCategory());
            updatedMovie.setDescription(movie.getDescription());
            updatedMovie.setDuration(movie.getDuration());
            updatedMovie.setGenre(movie.getGenre());
            updatedMovie.setLanguage(movie.getLanguage());
            return movieRepository.saveAndFlush(updatedMovie);
        } else {
            return null;
        }
    }

//    @Override
//    public List<MovieCast> updateMovieCast(Long movieId, List<Long> actorIds) {
//        Optional<Movie> movie = movieRepository.findById(movieId);
//
//        if (movie.isPresent()) {
//            Movie ceva = movie.get();
//            List<Actor> actors = (List<Actor>) actorRepository.findAllById(actorIds);
//            List<MovieCast> currentMovieCastList = ceva.getCast();
//            currentMovieCastList.clear();
//
//            for(Actor a : actors){
//                MovieCast movieCast = new MovieCast();
//                movieCast.setMovie(ceva);
//                movieCast.setActor(a);
//                currentMovieCastList.add(movieCast);
//            }
//            ceva.setCast(currentMovieCastList);
//            return currentMovieCastList;
//            try {
//                 movieRepository.save(ceva);
//                 return movieRepository.findById(movieId).get().getCast();
//            } catch (Exception e) {
//                e.printStackTrace();
//            }
//        }else{
//            throw new EntityNotFoundException("Movie with id " + movieId + " not found");
////        }
//        return null;
//    }

    @Transactional
    @Override
    public void deleteMovieById(Long id) {
        Movie foundMovie = movieRepository.findById(id).get();
        // delete the cast associated with the movie
        List<MovieCast> movieCasts = movieCastRepository.findAllByMovie(foundMovie);
        if (!movieCasts.isEmpty()) {
            movieCastRepository.deleteMovieCastByMovie(foundMovie);
        }

        // delete the broadcast associated with the movie
        List<Broadcast> broadcasts = broadcastRepository.findAllByMovie(foundMovie);
        if (!broadcasts.isEmpty()) {
            // delete reservation by broadcast
            reservationRepository.deleteReservationByBroadcast(broadcasts.get(0));
            // delete broadcast by movie
            broadcastRepository.deleteBroadcastByMovie(foundMovie);
        }
        movieRepository.deleteById(id);
    }

}
