package com.iga.controller;

import com.iga.model.Service;
import com.iga.model.Partner;
import com.iga.repository.PartnerRepository;
import com.iga.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/public")
@CrossOrigin(origins = "http://localhost:4200")
public class PublicController {

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private PartnerRepository partnerRepository;

    @GetMapping("/services")
    public ResponseEntity<List<Service>> getServices() {
        List<Service> services = serviceRepository.findByIsActiveTrue();
        return ResponseEntity.ok(services);
    }

    @GetMapping("/partners")
    public ResponseEntity<List<Partner>> getPartners() {
        List<Partner> partners = partnerRepository.findByIsActiveTrue();
        return ResponseEntity.ok(partners);
    }

    @GetMapping("/company")
    public ResponseEntity<CompanyInfo> getCompanyInfo() {
        // Retourne les informations de l'entreprise
        CompanyInfo info = new CompanyInfo();
        info.setName("Groupe IGA");
        info.setDescription("Experts en conseil hydrogéologique et prestations techniques");
        info.setAddress("Lomé, Togo");
        info.setPhone("+228 XX XX XX XX");
        info.setEmail("contact@iga-togo.com");
        info.setMission("Fournir des solutions hydrogéologiques innovantes et durables");
        info.setVision("Être le leader régional en conseil hydrogéologique");
        info.setValues("Excellence, Innovation, Durabilité, Intégrité");

        return ResponseEntity.ok(info);
    }

    // Classe interne pour les informations de l'entreprise
    public static class CompanyInfo {
        private String name;
        private String description;
        private String address;
        private String phone;
        private String email;
        private String mission;
        private String vision;
        private String values;

        // Getters et Setters
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }

        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }

        public String getAddress() { return address; }
        public void setAddress(String address) { this.address = address; }

        public String getPhone() { return phone; }
        public void setPhone(String phone) { this.phone = phone; }

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }

        public String getMission() { return mission; }
        public void setMission(String mission) { this.mission = mission; }

        public String getVision() { return vision; }
        public void setVision(String vision) { this.vision = vision; }

        public String getValues() { return values; }
        public void setValues(String values) { this.values = values; }
    }
}
