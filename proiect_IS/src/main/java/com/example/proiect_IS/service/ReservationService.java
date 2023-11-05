package com.example.proiect_IS.service;

import com.example.proiect_IS.model.Reservation;
import org.springframework.stereotype.Component;

@Component
public interface ReservationService {
    Reservation saveReservation(Reservation reservation);
    Reservation findReservationById(Long id);
}
