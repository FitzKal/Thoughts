package com.idk.hobby.testUtils;

import com.idk.hobby.enums.StateOfProgress;
import com.idk.hobby.models.ThoughtDTO;
import com.idk.hobby.models.Thoughts;
import lombok.Data;

import java.time.LocalDate;

@Data
public class TestUtils {
    private final Long Id = 1L;
    private final LocalDate dateOfCreation = LocalDate.now();
    private final LocalDate dateDue = LocalDate.now().plusDays(2);
    private final String description = "Description";
    private final String name = "Name";
    private final StateOfProgress stateOfProgress = StateOfProgress.IN_PROGRESS;

    public Thoughts mockThought() {
        return Thoughts.builder().id(Id).name(name)
                .dateOfCreation(dateOfCreation).
                dateDue(dateDue)
                .description(description)
                .stateOfProgress(stateOfProgress)
                .build();
    }

    public ThoughtDTO mockThoughtDTO(){
        return ThoughtDTO.builder().id(Id)
                .name(name)
                .dateOfCreation(dateOfCreation)
                .dateDue(dateDue)
                .description(description)
                .stateOfProgress(stateOfProgress)
                .build();
    }
}