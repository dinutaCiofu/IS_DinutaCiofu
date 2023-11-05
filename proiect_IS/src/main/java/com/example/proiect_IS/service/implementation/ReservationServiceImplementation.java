package com.example.proiect_IS.service.implementation;

import com.example.proiect_IS.model.Reservation;
import com.example.proiect_IS.repository.ReservationRepository;
import com.example.proiect_IS.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationServiceImplementation implements ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;

    @Override
    public Reservation saveReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    @Override
    public Reservation findReservationById(Long id) {
        return reservationRepository.findReservationById(id);
    }
}
