package com.example.proiect_IS.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String description;
    private String duration;
    private String genre;
    private String language;
    private String category;

//    @JsonIgnore
    @OneToMany(mappedBy = "movie", cascade = CascadeType.ALL)
    private List<MovieReview> reviews = new ArrayList<>();


    @OneToMany(mappedBy = "movie")
    private List<Broadcast> broadcasts = new ArrayList<>();


    @OneToMany(mappedBy = "movie")
    private List<MovieCast> cast = new ArrayList<>();
}
