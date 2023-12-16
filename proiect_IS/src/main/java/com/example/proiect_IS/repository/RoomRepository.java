package com.example.proiect_IS.repository;

import com.example.proiect_IS.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
    @Query("SELECT u FROM Room u WHERE u.name = :name")
    Room findRoomByName(String name);

    @Modifying
    @Query(value = "DELETE FROM Room r WHERE r.name = :name", nativeQuery = true)
    void deleteByName(@Param("name") String name);
}
