package com.iga.repository;

import com.iga.model.Partner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PartnerRepository extends JpaRepository<Partner, Long> {
    List<Partner> findByIsActiveTrue();
    List<Partner> findByNameContainingIgnoreCase(String name);
}
