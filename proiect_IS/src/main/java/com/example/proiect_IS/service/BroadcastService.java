package com.example.proiect_IS.service;

import com.example.proiect_IS.model.Broadcast;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Component
public interface BroadcastService {
    Broadcast saveBroadcast(Broadcast broadcast);
    Broadcast findBroadcastById(Long id);

    List<Broadcast> findAllBroadcasts();
    List<Broadcast> findBroadcastsByDate(LocalDate date);
}
