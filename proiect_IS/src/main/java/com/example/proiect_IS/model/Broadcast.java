package com.example.proiect_IS.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Broadcast {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @JsonFormat(pattern = "MM/dd/yyyy")
    private LocalDate date;
    private Integer price;

    @ManyToOne
    @JoinColumn(name = "movie_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "movieIdFk"))
    private Movie movie;

    @ManyToOne
    @JoinColumn(name = "room_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "roomIdFk"))
    private Room room;

    @OneToMany(mappedBy = "broadcast")
    private List<Reservation> reservations = new ArrayList<>();


}
