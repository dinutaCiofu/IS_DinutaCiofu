package com.example.proiect_IS.service.implementation;

import com.example.proiect_IS.model.Reservation;
import com.example.proiect_IS.model.User;
import com.example.proiect_IS.repository.ReservationRepository;
import com.example.proiect_IS.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
        return reservationRepository.findById(id).get();
    }
    @Override
    public List<Reservation> findAll() {
        return reservationRepository.findAll();
    }
    @Override
    public List<Reservation> findAllByUser(User user) {
        return reservationRepository.findAllByUser(user);
    }

    @Override
    public void deleteReservationsByUserId(Long userID) {
        reservationRepository.deleteReservationByUserId(userID);
    }
    @Override
    public void deleteReservationById(Long id) {
        reservationRepository.deleteReservationById(id);
    }
}
