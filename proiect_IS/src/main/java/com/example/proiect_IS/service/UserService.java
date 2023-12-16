package com.example.proiect_IS.service;

import com.example.proiect_IS.model.User;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
public interface UserService {
    User saveUser(User user);
    User findUserById(Long id);
    User findUserByEmail(String email);
    @Transactional
    void deleteUserByEmail(String email);
    List<User> findAllUsers();
    User updateUser(User user, Long userId);
}
