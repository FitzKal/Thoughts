package com.idk.hobby.services;

import lombok.AllArgsConstructor;
import com.idk.hobby.models.Thoughts;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class ThoughtService {
    private Thoughts thoughts;

}
