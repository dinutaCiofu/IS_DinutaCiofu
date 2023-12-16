package com.example.proiect_IS.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="actor")
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class Actor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    private String firstName;
    private String lastName;

    @OneToMany(mappedBy = "actor")
    @JsonIgnore
    private List<MovieCast> filmography = new ArrayList<>();


}
