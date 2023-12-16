package com.example.proiect_IS.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="room")
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    private Integer seats;
    private String name;

    @OneToMany(mappedBy = "room")
    @JsonIgnore
    private List<Broadcast> broadcasts = new ArrayList<>();
}
