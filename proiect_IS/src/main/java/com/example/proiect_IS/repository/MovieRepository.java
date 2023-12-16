package com.example.proiect_IS.repository;

import com.example.proiect_IS.model.Actor;
import com.example.proiect_IS.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
    @Query("SELECT u FROM Movie u WHERE u.title = :title")
    Movie findMovieByTitle(@Param("title") String title);

    List<Movie> findAllByGenre(String genre);
    List<Movie> findAllByCategory(String category);
}
