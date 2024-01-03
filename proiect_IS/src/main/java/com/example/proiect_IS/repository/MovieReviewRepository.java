package com.example.proiect_IS.repository;

import com.example.proiect_IS.model.MovieReview;
import com.example.proiect_IS.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieReviewRepository extends JpaRepository<MovieReview, Long> {
    @Query("SELECT mr FROM MovieReview mr WHERE mr.user.id = :userID")
    List<MovieReview> findAllByUserId(Long userID);
    @Modifying
    @Query(value = "DELETE FROM MovieReview mr WHERE mr.user.id = :userID")
    void deleteMovieReviewByUserId(@Param("userID") Long userID);
}
