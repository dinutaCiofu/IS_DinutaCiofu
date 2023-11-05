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
    @JoinColumn(name = "user_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "userIdFk"))
    private User user;

    @ManyToOne
    @JoinColumn(name = "broadcast_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "broadcastIdFk"))
    private Broadcast broadcast;
}
