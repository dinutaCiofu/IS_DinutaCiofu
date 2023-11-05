package com.example.proiect_IS.repository;

import com.example.proiect_IS.model.Movie;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface MovieRepository extends CrudRepository<Movie, Long> {
    Movie findMovieById(Long id);
    Movie save(Movie movie);
    Movie findMovieByTitle(String title);
    List<Movie> findAll();
    List<Movie> findAllByGenre(String genre);
    List<Movie> findAllByCategory(String category);
}
