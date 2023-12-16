package com.example.proiect_IS.controller;

import com.example.proiect_IS.model.Actor;
import com.example.proiect_IS.service.implementation.ActorServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin //poate sa primeasca request-uri de la orice aplicatie
@RequiredArgsConstructor
public class ActorController {
    private final ActorServiceImplementation actorServiceImplementation;

    @PostMapping("/addActor")
    public Actor insert(@RequestBody Actor actor){
        return actorServiceImplementation.saveActor(actor);
    }
    @GetMapping("/getActors")
    public List<Actor> getActors(){
        return  actorServiceImplementation.findAllActors();
    }
    @GetMapping("/getActorByFirstName")
    public Actor getActorByFirstName(@RequestBody String firstName){
        return actorServiceImplementation.findActorByFirstName(firstName);
    }
    @GetMapping("/getActorById")
    public Actor getActorById(@RequestBody Long id){
        return actorServiceImplementation.findActorById(id);
    }

    @DeleteMapping("/deleteActorById/{id}")
    public ResponseEntity<String> deleteActorById(@PathVariable Long id){
        actorServiceImplementation.deleteActorById(id);
        return ResponseEntity.ok("Actor deleted successfully");
    }

}
