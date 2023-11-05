package com.example.proiect_IS.DTO;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class MovieDTO {
    private String title;
    private String description;
    private String duration;
    private String genre;
    private String language;
    private String category;
}
