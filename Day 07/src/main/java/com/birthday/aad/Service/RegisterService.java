package com.birthday.aad.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.birthday.aad.Entity.Register;
import com.birthday.aad.Repository.RegisterRepository;


@Service
public class RegisterService {
    @Autowired
    private RegisterRepository registerRepo;
    
    public void saveRegister(Register reg)
    {
        registerRepo.save(reg);
    }
    public List<Register> getRegister()
    {
        return registerRepo.findAll();
    }
    public void updateRegister(Register reg)
    {
         registerRepo.save(reg);
    }
    public void deleteRegister(int id)
    {
        registerRepo.deleteById(id);
    }
}
