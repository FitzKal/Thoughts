package com.idk.hobby.converters;

import com.idk.hobby.models.ThoughtDTO;
import com.idk.hobby.models.Thoughts;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ThoughDTOConverter {
     ThoughtDTO thoughtTODTO(Thoughts thoughts);
     Thoughts DTOToThought(ThoughtDTO thoughtDTO);
}
