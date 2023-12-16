package com.example.proiect_IS.service.implementation;

import com.example.proiect_IS.model.Room;
import com.example.proiect_IS.repository.RoomRepository;
import com.example.proiect_IS.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomServiceImplementation implements RoomService {
    @Autowired
    private RoomRepository roomRepository;

    @Override
    public Room saveRoom(Room room) {
        return roomRepository.save(room);
    }

    @Override
    public Room findRoomById(Long id) {
        return roomRepository.findById(id).get();
    }

    @Override
    public Room findRoomByName(String name) {
        return roomRepository.findRoomByName(name);
    }

    @Override
    public List<Room> findAllRooms() {
        return roomRepository.findAll();
    }

    @Override
    public Room updateRoom(Room room, Long id) {
        Room roomDB = roomRepository.findById(id).get();
        if (roomDB != null) {
            roomDB.setSeats(room.getSeats());
            roomDB.setName(room.getName());
            return roomRepository.saveAndFlush(roomDB);
        } else {
            return null;
        }
    }

    @Override
    public void deleteRoomByName(String name) {
        roomRepository.deleteByName(name);
    }
}
