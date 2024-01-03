package com.example.proiect_IS.repository;

import com.example.proiect_IS.model.Broadcast;
import com.example.proiect_IS.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Repository
public interface BroadcastRepository extends JpaRepository<Broadcast, Long> {
    List<Broadcast> findBroadcastsByDate(LocalDate date);
    @Query("SELECT b FROM Broadcast b WHERE b.movie = :movie")
    List<Broadcast> findAllByMovie(Movie movie);

    @Modifying
    @Query(value="DELETE FROM Broadcast b WHERE b.movie = :movie")
    void deleteBroadcastByMovie(@Param("movie") Movie movie);
}
