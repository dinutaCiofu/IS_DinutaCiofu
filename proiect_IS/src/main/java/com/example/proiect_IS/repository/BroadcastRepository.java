package com.example.proiect_IS.repository;

import com.example.proiect_IS.model.Broadcast;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Repository
public interface BroadcastRepository extends CrudRepository<Broadcast, Long> {
    Broadcast save(Broadcast broadcast);
    Broadcast findBroadcastById(Long id);

    List<Broadcast> findAll();
    List<Broadcast> findBroadcastsByDate(LocalDate date);
}
