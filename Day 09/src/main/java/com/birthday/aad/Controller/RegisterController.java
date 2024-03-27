package com.birthday.aad.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;





import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.birthday.aad.Entity.Register;
import com.birthday.aad.Service.RegisterService;


@CrossOrigin
@RestController
public class RegisterController 
{
    @Autowired
    private RegisterService regservice;

    @GetMapping("/getreg")
    public List<Register> getRegisterDetails()
    {
         return regservice.getRegister();
    }
    
    @PostMapping("/registerdetails")
    public String register(@RequestBody Register reg)
    {
        regservice.saveRegister(reg);
        return("Successfully Saved");
    } 
       
    @PutMapping("/updateregister")
    public String updateRegisterDetails(@RequestBody Register reg,@RequestParam int id)
    {
         reg.setId(id);
         regservice.updateRegister(reg);
         return("Sucessfully Updated");
    }

    @DeleteMapping("/deleteregister")
    public String deleteRegisterDetails(@RequestParam int id)
    {
        regservice.deleteRegister(id);
        return("Successfully deleted");
    }
}