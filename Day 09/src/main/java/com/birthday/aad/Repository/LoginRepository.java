package com.birthday.aad.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.birthday.aad.Entity.Login;


@Repository
public interface LoginRepository extends JpaRepository<Login,Integer> {
    
}