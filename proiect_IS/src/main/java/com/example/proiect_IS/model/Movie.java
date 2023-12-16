package com.example.proiect_IS.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="movie")
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    private String title;
    private String description;
    private String duration;
    private String genre;
    private String language;
    private String category;
    @OneToMany(mappedBy = "movie")
    @JsonIgnore
    private List<MovieReview> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "movie")
    @JsonIgnore
    private List<Broadcast> broadcasts = new ArrayList<>();

    @OneToMany(mappedBy = "movie")
    @JsonIgnore
    private List<MovieCast> cast = new ArrayList<>();
}
