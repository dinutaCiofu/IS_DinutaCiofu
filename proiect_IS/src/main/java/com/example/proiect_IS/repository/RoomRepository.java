package com.example.proiect_IS.repository;

import com.example.proiect_IS.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomRepository extends CrudRepository<Room, Long> {
    Room save(Room room);
    Room findRoomById(Long id);
    Room findRoomByName(String name);
    List<Room> findAll();
    void deleteByName(String name);
}
