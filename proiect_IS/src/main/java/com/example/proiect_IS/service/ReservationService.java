package com.example.proiect_IS.service;

import com.example.proiect_IS.model.Reservation;
import com.example.proiect_IS.model.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface ReservationService {
    Reservation saveReservation(Reservation reservation);
    Reservation findReservationById(Long id);
    List<Reservation> findAll();
    List<Reservation> findAllByUser(User user);
    void deleteReservationsByUserId(Long userID);
    void deleteReservationById(Long id);
}
