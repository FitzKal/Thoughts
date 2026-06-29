package com.idk.hobby.services;

import com.idk.hobby.converters.ThoughDTOConverter;
import com.idk.hobby.exceptions.ThoughtNotFoundException;
import com.idk.hobby.interfaces.ThoughtMethods;
import com.idk.hobby.models.ThoughtDTO;
import com.idk.hobby.repositories.ThoughtRepository;
import lombok.AllArgsConstructor;
import com.idk.hobby.models.Thoughts;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@AllArgsConstructor
public class ThoughtService implements ThoughtMethods {
    private ThoughtRepository thoughtRepository;
    private  ThoughDTOConverter thoughDTOConverter;

    @Override
    public ThoughtDTO getThoughtById(Long id) {
        var thought = findThoughtById(id);
        return thoughDTOConverter.thoughtTODTO(thought);
    }

    @Override
    public List<ThoughtDTO> getAllThoughts() {
        return thoughtRepository.findAll().stream().map(thoughDTOConverter::thoughtTODTO).toList();
    }

    @Override
    public ThoughtDTO saveThought(ThoughtDTO thoughtDTO) {
        saveThought(thoughDTOConverter.DTOToThought(thoughtDTO));
        return thoughtDTO;
    }

    @Override
    public ThoughtDTO editThought(Long id, ThoughtDTO thoughtDTO) {
        var thoughtToEdit = findThoughtById(id);
        thoughtToEdit.setDate(thoughtDTO.getDate());
        thoughtToEdit.setName(thoughtDTO.getName());
        thoughtToEdit.setDescription(thoughtDTO.getDescription());
        saveThought(thoughtToEdit);
        return thoughtDTO;
    }

    @Override
    public String deleteThoughtById(Long id) {
        thoughtRepository.deleteById(id);
        return ("Thought with the id of " + id + " was deleted");
    }

    private Thoughts findThoughtById(Long id){
        return thoughtRepository.findById(id).orElseThrow(()-> new ThoughtNotFoundException("The thought was not found"));
    }

    private void saveThought (Thoughts thoughts){
        thoughts.setDate(LocalDate.now());
        thoughtRepository.save(thoughts);
    }
}
