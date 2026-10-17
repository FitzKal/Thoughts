package com.idk.hobby.models;

import com.idk.hobby.enums.StateOfProgress;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ThoughtDTO {
    private Long id;
    private String name;
    private LocalDate dateOfCreation;
    private LocalDate dateDue;
    private String description;
    @Enumerated(EnumType.STRING)
    private StateOfProgress stateOfProgress;
}
