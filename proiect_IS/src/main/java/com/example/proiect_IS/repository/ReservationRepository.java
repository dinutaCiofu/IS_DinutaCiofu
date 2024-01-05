package com.example.proiect_IS.repository;

import com.example.proiect_IS.model.Broadcast;
import com.example.proiect_IS.model.Reservation;
import com.example.proiect_IS.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    @Query("SELECT r FROM Reservation r WHERE r.user = :user")
    List<Reservation> findAllByUser(User user);
    @Modifying
    @Query(value = "DELETE FROM Reservation r WHERE r.user.id = :userID")
    void deleteReservationByUserId(Long userID);
    @Modifying
    @Query(value = "DELETE FROM Reservation r WHERE r.broadcast = :broadcast")
    void deleteReservationByBroadcast(Broadcast broadcast);
    @Modifying
    @Transactional
    @Query(value = "DELETE FROM Reservation r WHERE r.id = :id")
    void deleteReservationById(@Param("id")Long id);

}
