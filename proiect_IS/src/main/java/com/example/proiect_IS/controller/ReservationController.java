package com.example.proiect_IS.controller;

import com.example.proiect_IS.model.Reservation;
import com.example.proiect_IS.model.User;
import com.example.proiect_IS.service.implementation.ReservationServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    @GetMapping("/findAllReservations")
    public List<Reservation> findAllReservations(){
        return reservationServiceImplementation.findAll();
    }
    @GetMapping("/findAllReservationsByUser")
    public List<Reservation> findReservationsByUser(@RequestBody User user){
        return reservationServiceImplementation.findAllByUser(user);
    }
}
