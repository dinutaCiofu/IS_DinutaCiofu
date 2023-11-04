package com.example.proiect_IS.controller;

import com.example.proiect_IS.DTO.ObiectNou;
import com.example.proiect_IS.model.Actor;
import com.example.proiect_IS.model.Movie;
import com.example.proiect_IS.service.implementation.MovieServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin //poate sa primeasca request-uri de la orice aplicatie
@RequiredArgsConstructor
public class MovieController {
    private final MovieServiceImplementation movieServiceImplementation;

    @GetMapping("/GetData")
    public String getMessage(){
        return "Hai sa invatam Spring yey";
    }

    @PostMapping("/Print")
    public void printMessage(@RequestBody ObiectNou data){
        System.out.println(data);
    }

    @PostMapping("/Insert")
    public Movie insert(@RequestBody Movie movie){
       return movieServiceImplementation.saveMovie(movie);
    }

    @GetMapping("/GetByTitle")
    public Movie getByTitle(@RequestBody String title){
        Movie movie = movieServiceImplementation.findMovieByTitle(title);
        return movie;
    }

    @GetMapping("/findAllMovies")
    public List<Movie> findAllMovies(){
        return movieServiceImplementation.findAllMovies();
    }

    @GetMapping("/findAllByGenre")
    public List<Movie> findAllByGenre(@RequestBody String genre){
        return movieServiceImplementation.findMoviesByGenre(genre);
    }

    @GetMapping("/findAllByCategory")
    public List<Movie> findAllByCategory(@RequestBody String category){
        return movieServiceImplementation.findMoviesByCategory(category);
    }

    @PostMapping("/movies/{movieId}/updateCast")
    public Movie updateMovieCast(@PathVariable Long movieId, @RequestBody List<Long> actorIds) {
        Movie updatedMovie = movieServiceImplementation.updateMovieCast(movieId, actorIds);
        return updatedMovie;
    }
}
