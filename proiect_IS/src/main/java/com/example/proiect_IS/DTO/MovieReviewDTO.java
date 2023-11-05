package com.example.proiect_IS.DTO;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class MovieReviewDTO {
    private Long userId;
    private Long movieId;
    private String comment;
    private Integer rating;
}
