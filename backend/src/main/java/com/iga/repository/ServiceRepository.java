package com.iga.repository;

import com.iga.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {
    List<Service> findByIsActiveTrue();

    List<Service> findByCategory(String category);

    List<Service> findByCategoryAndIsActiveTrue(String category);
}
