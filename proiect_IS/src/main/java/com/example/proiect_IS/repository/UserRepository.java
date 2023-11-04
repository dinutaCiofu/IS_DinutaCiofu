package com.example.proiect_IS.repository;

import com.example.proiect_IS.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    User findUserById(Long id);
    User save(User user);
    List<User> findAll();
    User findUserByEmail(String email);
    void deleteUserByEmail(String email);
}
