package com.example.proiect_IS.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="reservation")
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "userIdFkk"))
    private User user;

    @ManyToOne
    @JoinColumn(name = "broadcast_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "broadcastIdFk"))
    private Broadcast broadcast;
}
