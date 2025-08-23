# Architecture Backend - IGA

## Vue d'ensemble
Le backend est développé avec Spring Boot pour fournir une API REST robuste et sécurisée pour le site vitrine IGA.

## Architecture générale

### Diagramme de classes

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│     User        │    │    Project      │    │    Service      │
├─────────────────┤    ├─────────────────┤    ├─────────────────┤
│ - id: Long      │    │ - id: Long      │    │ - id: Long      │
│ - username: Str │    │ - title: String │    │ - name: String  │
│ - email: String │    │ - description   │    │ - description   │
│ - password: Str │    │ - startDate     │    │ - icon: String  │
│ - role: Role    │    │ - endDate       │    │ - category: Str │
│ - createdAt     │    │ - status: Enum  │    │ - isActive: Bool│
└─────────────────┘    │ - location: Str │    └─────────────────┘
                       │ - client: String│
┌─────────────────┐    │ - images: List  │    ┌─────────────────┐
│    Partner      │    │ - createdAt     │    │   CompanyInfo   │
├─────────────────┤    │ - updatedAt     │    ├─────────────────┤
│ - id: Long      │    └─────────────────┘    │ - id: Long      │
│ - name: String  │                           │ - name: String  │
│ - logo: String  │    ┌─────────────────┐    │ - description   │
│ - website: Str  │    │   ProjectImage  │    │ - address: Str  │
│ - description   │    ├─────────────────┤    │ - phone: String │
│ - isActive: Bool│    │ - id: Long      │    │ - email: String │
└─────────────────┘    │ - projectId     │    │ - mission: Str  │
                       │ - filename: Str │    │ - vision: String│
                       │ - url: String   │    │ - values: String│
                       │ - altText: Str  │    └─────────────────┘
                       └─────────────────┘
```

## Structure du projet

```
src/main/java/com/iga/
├── IgaApplication.java
├── config/
│   ├── SecurityConfig.java
│   ├── CorsConfig.java
│   └── DatabaseConfig.java
├── controller/
│   ├── AuthController.java
│   ├── ProjectController.java
│   ├── ServiceController.java
│   ├── PartnerController.java
│   └── CompanyController.java
├── model/
│   ├── User.java
│   ├── Project.java
│   ├── ProjectImage.java
│   ├── Service.java
│   ├── Partner.java
│   └── CompanyInfo.java
├── repository/
│   ├── UserRepository.java
│   ├── ProjectRepository.java
│   ├── ServiceRepository.java
│   ├── PartnerRepository.java
│   └── CompanyInfoRepository.java
├── service/
│   ├── AuthService.java
│   ├── ProjectService.java
│   ├── ServiceManagementService.java
│   ├── PartnerService.java
│   ├── CompanyService.java
│   └── FileStorageService.java
├── dto/
│   ├── request/
│   └── response/
└── exception/
    ├── GlobalExceptionHandler.java
    └── custom exceptions
```

## Sécurité
- **JWT** pour l'authentification
- **Spring Security** pour la protection des endpoints
- **CORS** configuré pour le frontend Angular
- **Validation** des données avec Bean Validation

## Base de données
- **PostgreSQL** en production
- **H2** pour les tests
- **JPA/Hibernate** pour l'ORM
- **Flyway** pour les migrations

## API Endpoints

### Authentification
- `POST /api/auth/login` - Connexion
- `POST /api/auth/logout` - Déconnexion
- `GET /api/auth/me` - Profil utilisateur

### Projets (Admin)
- `GET /api/admin/projects` - Liste des projets
- `POST /api/admin/projects` - Créer un projet
- `PUT /api/admin/projects/{id}` - Modifier un projet
- `DELETE /api/admin/projects/{id}` - Supprimer un projet

### Données publiques
- `GET /api/public/projects` - Projets visibles
- `GET /api/public/services` - Services offerts
- `GET /api/public/partners` - Partenaires
- `GET /api/public/company` - Informations entreprise

## Bonnes pratiques
- **DTO Pattern** pour séparer les modèles internes des API
- **Exception Handling** centralisé
- **Validation** des données d'entrée
- **Logging** avec SLF4J
- **Tests unitaires** avec JUnit 5
- **Documentation** API avec Swagger/OpenAPI
