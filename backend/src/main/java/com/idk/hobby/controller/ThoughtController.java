package com.idk.hobby.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.idk.hobby.services.ThoughtService;

@RestController
@AllArgsConstructor
@RequestMapping("/api/thoughts")
public class ThoughtController {
    private ThoughtService thoughtService;

    @GetMapping
    public String hello(){
        return "Hello";
    }
}