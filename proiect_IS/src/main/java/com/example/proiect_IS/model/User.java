package com.example.proiect_IS.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="user")
@ToString
@AllArgsConstructor
@NoArgsConstructor
//@Data
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phoneNumber;
    private Boolean isAdmin;
    private Boolean isCustomer;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<MovieReview> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
   @JsonIgnore
    private List<Reservation> reservations = new ArrayList<>();
}
