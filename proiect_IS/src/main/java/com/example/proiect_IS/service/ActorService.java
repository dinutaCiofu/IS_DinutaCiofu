package com.example.proiect_IS.service;

import com.example.proiect_IS.model.Actor;
import com.example.proiect_IS.model.Movie;
import org.springframework.stereotype.Component;

import javax.swing.*;
import java.util.List;
import java.util.Set;
@Component
public interface ActorService {
    Actor saveActor(Actor actor);
//    void deleteActorById(Long id);
List<Actor> findAllActors();
    List<Actor> findAllActorsById(List<Long> ids);
    Actor findActorByFirstName(String firstName);
    Actor findActorById(Long id);

}
