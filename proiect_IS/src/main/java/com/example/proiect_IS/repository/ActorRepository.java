package com.example.proiect_IS.repository;

import com.example.proiect_IS.model.Actor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;
@Repository
public interface ActorRepository extends JpaRepository<Actor, Long> {
    @Query("SELECT u FROM Actor u WHERE u.firstName = :firstName")
    Actor findActorByFirstName(@Param("firstName") String firstName);
}
