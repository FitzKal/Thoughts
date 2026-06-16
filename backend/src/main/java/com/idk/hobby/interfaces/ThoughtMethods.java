package com.idk.hobby.interfaces;

import com.idk.hobby.models.ThoughtDTO;

import java.util.List;

public interface ThoughtMethods {
     ThoughtDTO getThoughtById(Long id);
     List<ThoughtDTO> getAllThoughts();
     ThoughtDTO saveThought(ThoughtDTO thoughtDTO);
     ThoughtDTO editThought(Long id, ThoughtDTO thoughtDTO);
     String deleteThoughtById(Long id);
}
