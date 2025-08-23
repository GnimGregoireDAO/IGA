package com.iga.repository;

import com.iga.model.Project;
import com.iga.model.Project.ProjectStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    List<Project> findByStatus(ProjectStatus status);

    List<Project> findByLocationContainingIgnoreCase(String location);

    List<Project> findByClientContainingIgnoreCase(String client);

    @Query("SELECT p FROM Project p WHERE p.status = 'COMPLETED' ORDER BY p.endDate DESC")
    List<Project> findCompletedProjectsOrderByEndDate();

    @Query("SELECT p FROM Project p WHERE p.status IN ('COMPLETED', 'IN_PROGRESS') ORDER BY p.createdAt DESC")
    List<Project> findPublicProjects();
}
