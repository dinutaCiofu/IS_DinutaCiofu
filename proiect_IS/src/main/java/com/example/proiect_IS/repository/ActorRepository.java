package com.example.proiect_IS.repository;

import com.example.proiect_IS.model.Actor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;
@Repository
public interface ActorRepository extends CrudRepository<Actor, Long> {
    Actor save(Actor actor);
    void deleteById(Long id);
    List<Actor> findAll();
    Actor findActorByFirstName(String firstName);
    Actor findActorById(Long id);
    List<Actor> findAllByIdIn(List<Long> ids);

}
