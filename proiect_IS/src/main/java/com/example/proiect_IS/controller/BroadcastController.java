package com.example.proiect_IS.controller;

import com.example.proiect_IS.model.Broadcast;
import com.example.proiect_IS.service.implementation.BroadcastServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
public class BroadcastController {
    private final BroadcastServiceImplementation broadcastServiceImplementation;

    @PostMapping("/addBroadcast")
    public Broadcast addBroadcast(@RequestBody Broadcast broadcast){
        return broadcastServiceImplementation.saveBroadcast(broadcast);
    }

    @GetMapping("/findBroadcastById/{id}")
    public Broadcast findBroadcastByIs(@PathVariable Long id){
        return broadcastServiceImplementation.findBroadcastById(id);
    }

    @GetMapping("/getAllBroadcasts")
    public List<Broadcast> findAllBroadcasts(){
        return broadcastServiceImplementation.findAllBroadcasts();
    }

    @GetMapping("/findBroadcastsByDate")
    public List<Broadcast> findBroadcastsByDate(@RequestParam("date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        return broadcastServiceImplementation.findBroadcastsByDate(date);
    }
}
