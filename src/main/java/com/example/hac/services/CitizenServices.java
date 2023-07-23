package com.example.hac.services;

import com.example.hac.model.Citizen;
import com.example.hac.repo.CitizenRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CitizenServices {
    private final CitizenRepository citizenRepository;
    @Autowired
    public CitizenServices(CitizenRepository citizenRepository) {
        this.citizenRepository = citizenRepository;
    }

    public List<Citizen> getCitizens() {
        return citizenRepository.findAll();
    }

    public Citizen addCitizen(@Valid Citizen citizen) {
        return citizenRepository.save(citizen);
    }
}
