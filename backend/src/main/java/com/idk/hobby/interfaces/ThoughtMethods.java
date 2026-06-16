package com.idk.hobby.interfaces;

import com.idk.hobby.models.ThoughtDTO;

import java.util.List;

public interface ThoughtMethods {
    public ThoughtDTO getThoughtById(Long id);
    public List<ThoughtDTO> getAllThoughts();
    public ThoughtDTO saveThought(ThoughtDTO thoughtDTO);
    public ThoughtDTO editThought(Long id, ThoughtDTO thoughtDTO);
    public String deleteThoughtById(Long id);
}
