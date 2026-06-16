package com.idk.hobby.controller;

import com.idk.hobby.interfaces.ThoughtMethods;
import com.idk.hobby.models.ThoughtDTO;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.idk.hobby.services.ThoughtService;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/thoughts")
public class ThoughtController {
    private ThoughtService thoughtService;

    @GetMapping
    public String hello(){
        return "Hello";
    }

    @GetMapping("/{id}")
    public ResponseEntity<ThoughtDTO> getThoughtById(@PathVariable Long id) {
        return ResponseEntity.ok(thoughtService.getThoughtById(id));
    }

    @GetMapping
    public ResponseEntity<List<ThoughtDTO>> getAllThoughts() {
        return ResponseEntity.ok(thoughtService.getAllThoughts());
    }

    @PostMapping
    public ResponseEntity<ThoughtDTO> saveThought(@RequestBody ThoughtDTO thoughtDTO) {
        return ResponseEntity.ok(thoughtService.saveThought(thoughtDTO));
    }

    @PutMapping
    public ResponseEntity<ThoughtDTO> editThought(Long id, ThoughtDTO thoughtDTO) {
        return ResponseEntity.ok(thoughtService.editThought(id,thoughtDTO));
    }

    @DeleteMapping
    public ResponseEntity<String> deleteThoughtById(Long id) {
        return ResponseEntity.ok(thoughtService.deleteThoughtById(id));
    }
}