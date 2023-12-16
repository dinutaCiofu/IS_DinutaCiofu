package com.example.proiect_IS.service;

import com.example.proiect_IS.model.Room;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Component
public interface RoomService {
    Room saveRoom(Room room);
    Room findRoomById(Long id);
    Room findRoomByName(String name);
    List<Room> findAllRooms();
    Room updateRoom(Room room, Long id);
    @Transactional
    void deleteRoomByName(String name);
}
