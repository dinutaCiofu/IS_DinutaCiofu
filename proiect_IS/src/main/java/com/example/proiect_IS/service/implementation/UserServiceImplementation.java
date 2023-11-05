package com.example.proiect_IS.service.implementation;

import com.example.proiect_IS.model.MovieReview;
import com.example.proiect_IS.model.User;
import com.example.proiect_IS.repository.MovieReviewRepository;
import com.example.proiect_IS.repository.UserRepository;
import com.example.proiect_IS.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserServiceImplementation implements UserService {
    @Autowired
    private UserRepository userRepository;
//    @Autowired
//    private MovieReviewRepository movieReviewRepository;

    @Override
    public User findUserById(Long id) {
        return userRepository.findUserById(id);
    }

    @Override
    public User saveUser(User user) {
        User existingUser = userRepository.findUserByEmail(user.getEmail());

        if(existingUser == null){
            return userRepository.save(user);
        }else{
            return existingUser;
        }
    }

    @Override
    public User findUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    @Override
    public void deleteUserByEmail(String email) {
        userRepository.deleteUserByEmail(email);
    }

    @Override
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User updateUser(User user, Long userId) {
        User userDB = userRepository.findUserById(userId);
//        List<MovieReview> movieReviews = movieReviewRepository.findAllByUser(user);

        if(Objects.nonNull(user.getFirstName()) && !"".equalsIgnoreCase(user.getFirstName())){
            userDB.setFirstName(user.getFirstName());
        }
        if(Objects.nonNull(user.getLastName()) && !"".equalsIgnoreCase(user.getFirstName())){
            userDB.setLastName(user.getLastName());
        }
        if(Objects.nonNull(user.getEmail()) && !"".equalsIgnoreCase(user.getEmail())){
            userDB.setEmail(user.getEmail());
        }
        if(Objects.nonNull(user.getPassword()) && !"".equalsIgnoreCase(user.getPassword())){
            userDB.setPassword(user.getPassword());
        }
        if(Objects.nonNull(user.getPhoneNumber()) && !"".equalsIgnoreCase(user.getPhoneNumber())){
            userDB.setPhoneNumber(user.getPhoneNumber());
        }

//        userDB.setReviews(movieReviews);

        return userRepository.save(userDB);
    }
}
