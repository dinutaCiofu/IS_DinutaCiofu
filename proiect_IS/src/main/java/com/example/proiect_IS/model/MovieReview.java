package com.example.proiect_IS.model;

import jakarta.persistence.*;
import jdk.jfr.Frequency;
import lombok.*;

@Entity
@Table(name="movie_review")
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MovieReview {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", foreignKey = @ForeignKey(name="userIdFk"))
    private User user;

    @ManyToOne
    @JoinColumn(name = "movie_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "movieIdFkk"))
    private Movie movie;

    private String comment;
    private Integer rating;
}
