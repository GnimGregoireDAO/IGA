package com.iga.service;

import com.iga.model.Project;
import com.iga.model.ProjectImage;
import com.iga.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public List<Project> getPublicProjects() {
        return projectRepository.findPublicProjects();
    }

    public Optional<Project> getProjectById(Long id) {
        return projectRepository.findById(id);
    }

    public Project createProject(Project project) {
        return projectRepository.save(project);
    }

    public Project updateProject(Long id, Project projectDetails) {
        return projectRepository.findById(id)
            .map(project -> {
                project.setTitle(projectDetails.getTitle());
                project.setDescription(projectDetails.getDescription());
                project.setStartDate(projectDetails.getStartDate());
                project.setEndDate(projectDetails.getEndDate());
                project.setStatus(projectDetails.getStatus());
                project.setLocation(projectDetails.getLocation());
                project.setClient(projectDetails.getClient());
                return projectRepository.save(project);
            })
            .orElseThrow(() -> new RuntimeException("Projet non trouvé avec l'id: " + id));
    }

    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }

    public List<Project> getProjectsByStatus(Project.ProjectStatus status) {
        return projectRepository.findByStatus(status);
    }

    public List<Project> getCompletedProjects() {
        return projectRepository.findCompletedProjectsOrderByEndDate();
    }

    public Project addImageToProject(Long projectId, String filename, String url, String altText) {
        return projectRepository.findById(projectId)
            .map(project -> {
                ProjectImage image = new ProjectImage(project, filename, url, altText);
                project.getImages().add(image);
                return projectRepository.save(project);
            })
            .orElseThrow(() -> new RuntimeException("Projet non trouvé avec l'id: " + projectId));
    }
}
