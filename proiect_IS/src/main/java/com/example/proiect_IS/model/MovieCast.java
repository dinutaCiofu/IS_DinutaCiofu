package com.example.proiect_IS.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Data
public class MovieCast {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "actor_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "actorIdFk"))
    private Actor actor;

    @ManyToOne
    @JoinColumn(name = "movie_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "movieIdFk"))
    private Movie movie;
}
