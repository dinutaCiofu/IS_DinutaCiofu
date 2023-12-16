package com.example.proiect_IS.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="movie_cast")
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MovieCast {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "actor_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "actorIdFk"))
    private Actor actor;

    @ManyToOne
    @JoinColumn(name = "movie_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "movieIdFk"))
    private Movie movie;
}
