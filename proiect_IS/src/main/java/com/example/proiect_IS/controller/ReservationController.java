package com.example.proiect_IS.controller;

import com.example.proiect_IS.model.Reservation;
import com.example.proiect_IS.service.implementation.ReservationServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
public class ReservationController {
    private final ReservationServiceImplementation reservationServiceImplementation;

    @PostMapping("/addReservation")
    public Reservation addReservation(@RequestBody Reservation reservation){
       return reservationServiceImplementation.saveReservation(reservation);
    }

    @GetMapping("/findReservationById/{id}")
    public Reservation findReservationById(@PathVariable Long id){
        return reservationServiceImplementation.findReservationById(id);
    }
}
