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

import java.util.Optional;

import static org.mockito.BDDMockito.given;


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
    void postThought() {
        //Given
            var thoughtToSave = testUtils.mockThought();
            var thoughtToSaveDTO = testUtils.mockThoughtDTO();
            given(thoughDTOConverter.DTOToThought(thoughtToSaveDTO)).willReturn(thoughtToSave);
        //When
        underTest.postThought(thoughtToSaveDTO);
        //Then
        verify(thoughtRepository).save(thoughtToSave);
    }

    @Test
    void editThought() {
        //Given
        var thoughtToChange = testUtils.mockThought();
        var thoughtChangeDetails = testUtils.mockThoughtDTO();
        thoughtChangeDetails.setDescription("New Description");
        var changedThought = testUtils.mockThought();
        changedThought.setDescription("New Description");
        given(thoughtRepository.findById(1L)).willReturn(Optional.ofNullable(thoughtToChange));
        //When
        underTest.editThought(thoughtToChange.getId(),thoughtChangeDetails);
        //Then
        verify(thoughtRepository).save(changedThought);
    }

    @Test
    void deleteThoughtById() {
    }
}