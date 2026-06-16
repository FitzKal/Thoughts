package com.idk.hobby.services;

import com.idk.hobby.converters.ThoughDTOConverter;
import com.idk.hobby.exceptions.ThoughtNotFoundException;
import com.idk.hobby.models.ThoughtDTO;
import com.idk.hobby.repositories.ThoughtRepository;
import lombok.AllArgsConstructor;
import com.idk.hobby.models.Thoughts;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class ThoughtService {
    private Thoughts thoughts;
    ThoughtRepository thoughtRepository;
    ThoughDTOConverter thoughDTOConverter;

    public ThoughtDTO addThought(ThoughtDTO thoughtDTO){
         saveThought(thoughDTOConverter.DTOToThought(thoughtDTO));
         return thoughtDTO;
    }

    public ThoughtDTO getThoughtById(Long id){
        var thought = findThoughtById(id);
        return thoughDTOConverter.thoughtTODTO(thought);
    }

    public List<ThoughtDTO> getListOfThoughts(){
        return thoughtRepository.findAll().stream().map(thoughDTOConverter::thoughtTODTO).toList();
    }

    public String deleteThoughtById(Long id){
        thoughtRepository.deleteById(id);
        return ("Thought with the id of " + id + " was deleted");
    }

    public ThoughtDTO editThought(Long id, ThoughtDTO thoughtDTO){
        var thoughtToEdit = findThoughtById(id);
        thoughtToEdit.setDate(thoughtDTO.getDate());
        thoughtToEdit.setName(thoughtDTO.getName());
        thoughtToEdit.setDescription(thoughtDTO.getDescription());
        saveThought(thoughtToEdit);
        return thoughtDTO;
    }

    private Thoughts findThoughtById(Long id){
        return thoughtRepository.findById(id).orElseThrow(()-> new ThoughtNotFoundException("The thought was not found"));
    }

    private void saveThought (Thoughts thoughts){
        thoughtRepository.save(thoughts);
    }

}
