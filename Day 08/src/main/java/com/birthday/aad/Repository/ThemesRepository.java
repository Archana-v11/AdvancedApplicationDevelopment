package com.birthday.aad.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.birthday.aad.Entity.Themes;


@Repository
public interface ThemesRepository extends JpaRepository<Themes,Integer> {
    
}