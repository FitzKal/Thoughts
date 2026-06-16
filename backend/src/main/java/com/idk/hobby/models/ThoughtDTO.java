package com.idk.hobby.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ThoughtDTO {
    private int id;
    private String name;
    private LocalDate date;
    private String description;
}
