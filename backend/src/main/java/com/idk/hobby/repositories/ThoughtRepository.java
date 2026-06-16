package com.idk.hobby.repositories;

import com.idk.hobby.models.Thoughts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ThoughtRepository extends JpaRepository<Thoughts, Long> {

}
