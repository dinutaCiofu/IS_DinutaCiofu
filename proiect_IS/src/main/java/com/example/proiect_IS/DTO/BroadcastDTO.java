package com.example.proiect_IS.DTO;

import com.example.proiect_IS.model.Movie;
import com.example.proiect_IS.model.Room;
import lombok.Data;
import lombok.ToString;

import java.time.LocalDate;

@Data
@ToString
public class BroadcastDTO {
    private LocalDate date;
    private Integer price;
    private Long movieId;
    private Long roomId;
}
