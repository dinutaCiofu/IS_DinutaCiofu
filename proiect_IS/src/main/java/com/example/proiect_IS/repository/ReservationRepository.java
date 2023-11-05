package com.example.proiect_IS.repository;

import com.example.proiect_IS.model.Reservation;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends CrudRepository<Reservation, Long> {
    Reservation save(Reservation reservation);
    Reservation findReservationById(Long id);
}
