package com.example.proiect_IS.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jdk.jfr.Frequency;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Data
public class MovieReview {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", foreignKey = @ForeignKey(name="userIdFk"))
    private User user;

    @ManyToOne
//    @JsonBackReference
    @JoinColumn(name = "movie_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "movieIdFk"))
    private Movie movie;

    private String comment;
    private Integer rating;
}
