package com.example.proiect_IS.controller;

import com.example.proiect_IS.model.Room;
import com.example.proiect_IS.service.implementation.RoomServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
public class RoomController {
    private final RoomServiceImplementation roomServiceImplementation;

    @PostMapping("/addRoom")
    public Room addRoom(@RequestBody Room room){
        return roomServiceImplementation.saveRoom(room);
    }
    @GetMapping("/findRoomById/{id}")
    public Room findRoomById(@PathVariable Long id){
        return roomServiceImplementation.findRoomById(id);
    }

    @GetMapping("/findRoomByName")
    public Room findRoomByName(@RequestBody String name){
        return roomServiceImplementation.findRoomByName(name);
    }

    @GetMapping("/findAllRooms")
    public List<Room> findAll(){
        return roomServiceImplementation.findAllRooms();
    }

    @PutMapping("/updateRoom/{id}")
    public Room update(@RequestBody Room room, @PathVariable Long id){
        return roomServiceImplementation.updateRoom(room,id);
    }

    @DeleteMapping("/deleteRoomByName")
    public ResponseEntity<String> deleteRoomByName(@RequestBody String name){
        roomServiceImplementation.deleteRoomByName(name);
        return ResponseEntity.ok("Room deleted successfully");
    }
}
