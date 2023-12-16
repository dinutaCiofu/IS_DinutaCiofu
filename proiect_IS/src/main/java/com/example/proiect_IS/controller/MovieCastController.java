package com.example.proiect_IS.controller;

import com.example.proiect_IS.model.Actor;
import com.example.proiect_IS.model.Movie;
import com.example.proiect_IS.model.MovieCast;
import com.example.proiect_IS.service.implementation.MovieCastServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
public class MovieCastController {
    private final MovieCastServiceImplementation movieCastServiceImplementation;

    @PostMapping("/addCast")
    public MovieCast addCast(@RequestBody MovieCast movieCast){
        return movieCastServiceImplementation.addCast(movieCast);
    }

    @GetMapping("/getAllCasts")
    public List<MovieCast> getCasts(){
        return movieCastServiceImplementation.findAll();
    }

    @GetMapping("/findCastsByActor")
    public List<MovieCast> findCastsByACtor(@RequestBody Actor actor){
        return movieCastServiceImplementation.findAllByActor(actor);
    }

    @GetMapping("/findCastsByMovie")
    public List<MovieCast> findCastsByMovie(@RequestBody Movie movie){
        return movieCastServiceImplementation.findAllByMovie(movie);
    }
}
