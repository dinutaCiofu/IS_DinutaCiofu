package com.example.proiect_IS.repository;

import com.example.proiect_IS.model.Reservation;
import com.example.proiect_IS.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    @Query("SELECT r FROM Reservation r WHERE r.user = :user")
    List<Reservation> findAllByUser(User user);
}
