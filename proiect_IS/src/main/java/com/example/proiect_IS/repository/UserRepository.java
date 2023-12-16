package com.example.proiect_IS.repository;

import com.example.proiect_IS.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u WHERE u.email = :email")
    User findUserByEmail(String email);

    @Modifying
    @Query(value = "DELETE FROM User u WHERE u.email = :email", nativeQuery = true)
    void deleteUserByEmail(String email);
}
