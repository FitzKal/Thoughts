package com.idk.hobby.services;

import com.idk.hobby.converters.ThoughDTOConverter;
import com.idk.hobby.repositories.ThoughtRepository;
import com.idk.hobby.testUtils.TestUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mapstruct.factory.Mappers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.mockito.BDDMockito.given;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;

class ThoughtServiceTest {

    private static final TestUtils testUtils = new TestUtils();

    @Mock
    private static ThoughtRepository thoughtRepository;

    @Mock
    private static ThoughDTOConverter thoughDTOConverter = Mappers.getMapper(ThoughDTOConverter.class);

    @InjectMocks
    private static ThoughtService underTest;

    @BeforeEach
    public void setUp(){
        MockitoAnnotations.openMocks(this);
    }


    @Test
    void getThoughtById() {
    }

    @Test
    void getAllThoughts() {
    }

    @Test
    void saveThought() {
        //Given
            var thoughtToSave = testUtils.mockThought();
            var thoughtToSaveDTO = testUtils.mockThoughtDTO();
            given(thoughDTOConverter.DTOToThought(thoughtToSaveDTO)).willReturn(thoughtToSave);
        //When
        underTest.saveThought(thoughtToSaveDTO);
        //Then
        verify(thoughtRepository).save(thoughtToSave);
    }

    @Test
    void editThought() {
    }

    @Test
    void deleteThoughtById() {
    }
}