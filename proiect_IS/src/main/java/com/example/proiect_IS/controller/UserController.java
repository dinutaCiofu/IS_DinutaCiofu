package com.example.proiect_IS.controller;

import com.example.proiect_IS.model.User;
import com.example.proiect_IS.service.MovieReviewService;
import com.example.proiect_IS.service.implementation.MovieReviewServiceImplementation;
import com.example.proiect_IS.service.implementation.UserServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class UserController {
    private final UserServiceImplementation userServiceImplementation;
    private final MovieReviewServiceImplementation movieReviewServiceImplementation;

    @PostMapping("/signup")
    public User addUser(@RequestBody User user) {
        if (!user.getEmail().equals("dinutaciofu@gmail.com")) {
            user.setIsAdmin(false);
            user.setIsCustomer(true);
        } else {
            user.setIsAdmin(true);
            user.setIsCustomer(false);
        }
        return userServiceImplementation.saveUser(user);
    }

    @GetMapping("/findUserById/{id}")
    public User findById(@PathVariable Long id) {
        return userServiceImplementation.findUserById(id);
    }

    @GetMapping("/displayAllUsers")
    public ResponseEntity<List<User>> findAllUsers() {
        List<User> users = userServiceImplementation.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/findUserByEmail")
    public ResponseEntity<User> findUserByEmail(@RequestParam String email) {
        return new ResponseEntity<>(userServiceImplementation.findUserByEmail(email), HttpStatus.OK);
    }

    @DeleteMapping("/deleteUser")
    public ResponseEntity<String> deleteUserByEmail(@RequestParam String email) {
        userServiceImplementation.deleteUserByEmail(email);
        return ResponseEntity.ok("User deleted successfully");
    }

    @PutMapping("/updateUser/{id}")
    public User updateUser(@RequestBody User user, @PathVariable Long id) {
        return userServiceImplementation.updateUser(user, id);
    }
}
