package com.idk.hobby.models;

import com.idk.hobby.enums.StateOfProgress;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@AllArgsConstructor
@Data
@NoArgsConstructor
@EqualsAndHashCode
@Builder
public class Thoughts {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private LocalDate dateOfCreation;
    private LocalDate dateDue;
    private String description;
    @Enumerated(EnumType.STRING)
    private StateOfProgress stateOfProgress;
}
