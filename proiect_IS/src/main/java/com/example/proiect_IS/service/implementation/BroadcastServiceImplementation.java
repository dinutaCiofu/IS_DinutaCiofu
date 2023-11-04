package com.example.proiect_IS.service.implementation;

import com.example.proiect_IS.model.Broadcast;
import com.example.proiect_IS.repository.BroadcastRepository;
import com.example.proiect_IS.service.BroadcastService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class BroadcastServiceImplementation implements BroadcastService {
    @Autowired
    private BroadcastRepository broadcastRepository;

    @Override
    public Broadcast saveBroadcast(Broadcast broadcast) {
        return broadcastRepository.save(broadcast);
    }

    @Override
    public Broadcast findBroadcastById(Long id) {
        return broadcastRepository.findBroadcastById(id);
    }
    @Override
    public List<Broadcast> findAllBroadcasts() {
        return (List<Broadcast>) broadcastRepository.findAll();
    }
    @Override
    public List<Broadcast> findBroadcastsByDate(LocalDate date) {
        return broadcastRepository.findBroadcastsByDate(date);
    }
}
