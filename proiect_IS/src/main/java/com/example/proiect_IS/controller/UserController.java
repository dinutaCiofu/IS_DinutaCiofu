package com.example.proiect_IS.controller;

import com.example.proiect_IS.model.User;
import com.example.proiect_IS.service.implementation.UserServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
public class UserController {
    private final UserServiceImplementation userServiceImplementation;

    @PostMapping("/addUser")
    public User addUser(@RequestBody User user){
        return userServiceImplementation.saveUser(user);
    }

    @GetMapping("/findUserById/{id}")
    public User findById(@PathVariable Long id){
        return userServiceImplementation.findUserById(id);
    }

    @GetMapping("/findUserByEmail")
    public User findUserByEmail(@RequestBody String email){
        return userServiceImplementation.findUserByEmail(email);
    }

    @DeleteMapping("/deleteUser")
    public void deleteUserByEmail(@RequestBody String email){
        userServiceImplementation.deleteUserByEmail(email);
    }

    @PutMapping("/updateUser/{id}")
    public User updateUser(@RequestBody User user, @PathVariable Long id){
        return userServiceImplementation.updateUser(user,id);
    }
}
