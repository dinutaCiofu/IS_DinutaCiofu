package com.example.proiect_IS.controller;

import com.example.proiect_IS.DTO.ObiectNou;
import com.example.proiect_IS.model.Movie;
import com.example.proiect_IS.model.MovieCast;
import com.example.proiect_IS.repository.MovieRepository;
import com.example.proiect_IS.service.implementation.MovieServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin //poate sa primeasca request-uri de la orice aplicatie
@RequiredArgsConstructor
public class MovieController {
    private final MovieServiceImplementation movieServiceImplementation;

    @PostMapping("/saveMovie")
    public Movie insert(@RequestBody Movie movie) {
        return movieServiceImplementation.saveMovie(movie);
    }

    @GetMapping("/GetByTitle")
    public Movie getByTitle(@RequestBody String title) {
        return movieServiceImplementation.findMovieByTitle(title);
    }

    @GetMapping("/findAllMovies")
    public List<Movie> findAllMovies() {
        return movieServiceImplementation.findAllMovies();
    }

    @GetMapping("/findAllByGenre")
    public List<Movie> findAllByGenre(@RequestBody String genre) {
        return movieServiceImplementation.findMoviesByGenre(genre);
    }

    @GetMapping("/findAllByCategory")
    public List<Movie> findAllByCategory(@RequestBody String category) {
        return movieServiceImplementation.findMoviesByCategory(category);
    }

    @DeleteMapping("/deleteMovieById/{id}")
    public ResponseEntity<String> deleteMovie(@PathVariable Long id){
        movieServiceImplementation.deleteMovieById(id);
        return ResponseEntity.ok("Movie deleted successfully!");
    }

    @PostMapping("/updateMovie/{id}")
    public ResponseEntity<Movie> updateMovie(@PathVariable Long id, @RequestBody Movie movie){
        Movie updatedMovie = movieServiceImplementation.updateMovie(id,movie);
        if(updatedMovie != null){
            return new ResponseEntity<>(updatedMovie, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
//    @PostMapping("/movies/{movieId}/updateCast")
//    public List<MovieCast> updateMovieCast(@PathVariable Long movieId, @RequestBody List<Long> actorIds) {
//        List<MovieCast> updatedMovie = movieServiceImplementation.updateMovieCast(movieId, actorIds);
//        return updatedMovie;
//    }
}
