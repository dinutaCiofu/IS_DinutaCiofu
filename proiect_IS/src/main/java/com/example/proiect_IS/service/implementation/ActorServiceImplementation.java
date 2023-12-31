package com.example.proiect_IS.service.implementation;

import com.example.proiect_IS.model.Actor;
import com.example.proiect_IS.repository.ActorRepository;
import com.example.proiect_IS.service.ActorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ActorServiceImplementation implements ActorService {
    @Autowired
    private ActorRepository actorRepository;

    @Override
    public Actor saveActor(Actor actor) {
        return actorRepository.save(actor);
    }

    @Override
    public void deleteActorById(Long id) {
        actorRepository.deleteById(id);
    }
    @Override
    public List<Actor> findAllActors() {
      return actorRepository.findAll();
    }
    @Override
    public Actor findActorByFirstName(String firstName) {
        return actorRepository.findActorByFirstName(firstName);
    }

    @Override
    public Actor findActorById(Long id) {
        return actorRepository.findById(id).get();
    }


}
