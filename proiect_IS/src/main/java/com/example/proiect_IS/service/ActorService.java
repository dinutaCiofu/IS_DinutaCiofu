package com.example.proiect_IS.service;

import com.example.proiect_IS.model.Actor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Component
public interface ActorService {
    Actor saveActor(Actor actor);
    @Transactional
    void deleteActorById(Long id);
    List<Actor> findAllActors();
    Actor findActorByFirstName(String firstName);
    Actor findActorById(Long id);

}
