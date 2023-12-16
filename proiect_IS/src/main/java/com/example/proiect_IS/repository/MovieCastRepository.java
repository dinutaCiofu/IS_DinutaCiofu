package com.example.proiect_IS.repository;

import com.example.proiect_IS.model.Actor;
import com.example.proiect_IS.model.Movie;
import com.example.proiect_IS.model.MovieCast;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieCastRepository extends JpaRepository<MovieCast, Long> {
    @Query("SELECT a FROM MovieCast a WHERE a.actor = :actor")
    List<MovieCast> findAllByActor(Actor actor);
    @Query("SELECT m FROM MovieCast m WHERE m.movie = :movie")
    List<MovieCast> findAllByMovie(Movie movie);
}
