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
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_user", referencedColumnName = "id", foreignKey = @ForeignKey(name="idUser"))
    private User user;

    @ManyToOne
    @JoinColumn(name="id_broadcast",referencedColumnName = "id", foreignKey = @ForeignKey(name="idBroadcast"))
    private Broadcast broadcast;
}
