# 🌊 Projet IGA - Site Vitrine Complet 

## 🎯 Résumé du Projet

Je créé un site vitrine complet et innovant pour l'entreprise IGA, spécialisée en conseil hydrogéologique, avec des animations spectaculaires et une architecture moderne.

## ✨ Fonctionnalités Développées

### 🎨 Frontend Angular (Grandiose & Innovant)

#### 🏠 Page d'Accueil Spectaculaire
- **Animation de pluie** réaliste générée avec CSS/SVG
- **Animation de croissance de plante** au scroll (métaphore hydrogéologique)
- **Effet de particules d'eau** flottantes
- **Transitions fluides** et microinteractions
- **Design responsive** avec glassmorphism

#### 🛠️ Page Services Immersive
- **Cartes de services animées** avec effets de vague
- **Timeline méthodologique** interactive
- **Animations au scroll** sophistiquées
- **Effets visuels aquatiques** thématiques

#### 👨‍💼 Interface d'Administration Élégante
- **Connexion sécurisée** avec animations de particules
- **Dashboard professionnel** avec statistiques
- **CRUD complet des projets** avec modal animé
- **Interface intuitive** pour la gestion

#### 🎭 Composants Innovants
- **NavBar glassmorphism** avec effet sticky
- **Animations CSS avancées** (pluie, croissance, vagues)
- **Intersection Observer** pour les animations au scroll
- **Responsive design** mobile-first

### 🚀 Backend SpringBoot (Architecture Robuste)

#### 🔐 Sécurité & Authentification
- **JWT Authentication** sécurisée
- **Spring Security** configuré
- **Rôles ADMIN/USER** avec autorizations
- **CORS** configuré pour Angular

#### 📊 Modèles de Données
- **User** : Gestion des utilisateurs
- **Project** : Projets avec statuts et images
- **Service** : Services proposés par IGA
- **Partner** : Partenaires de l'entreprise

#### 🛡️ API REST Complète
- **Endpoints publics** : `/api/public/*`
- **Endpoints admin** : `/api/admin/*` (protégés)
- **CRUD complet** pour tous les modèles
- **Validation** des données d'entrée

#### 🗄️ Base de Données
- **H2** pour développement
- **PostgreSQL** ready pour production
- **JPA/Hibernate** avec relations

## 🎨 Charte Graphique Respectée

- **Bleu primaire** (#0077C2) : Confiance, expertise
- **Rouge secondaire** (#D72638) : Dynamisme, action
- **Vert accent** (#4CAF50) : Nature, durabilité
- **Dégradés aquatiques** : Thème hydrogéologique

## 🏗️ Architecture Technique

### Frontend (Angular 16+)
```
src/
├── app/
│   ├── core/                 # Services & modèles
│   ├── shared/               # Composants réutilisables
│   ├── features/            # Pages principales
│   │   ├── home/            # Accueil avec animations
│   │   ├── services/        # Services avec effets
│   │   └── admin/           # Interface d'admin
│   └── styles/              # Styles globaux
```

### Backend (SpringBoot)
```
src/main/java/com/iga/
├── config/                  # Sécurité & JWT
├── controller/              # API REST
├── model/                   # Entités JPA
├── repository/              # Accès données
├── service/                 # Logique métier
└── dto/                     # Objets de transfert
```

## 🚀 Démarrage du Projet

### Backend
```bash
cd backend
mvn spring-boot:run
```
➡️ API disponible sur `http://localhost:8080`

### Frontend
```bash
cd frontend
npm install
ng serve
```
➡️ Site disponible sur `http://localhost:4200`

## 🔑 Fonctionnalités Administrateur

1. **Connexion** : Interface sécurisée avec animations
2. **Dashboard** : Vue d'ensemble avec statistiques
3. **Gestion Projets** : CRUD complet avec modal
4. **Statuts Projets** : Planification → En cours → Terminé

## 🌟 Points Forts Techniques

### Animations Innovantes
- **Pluie réaliste** avec CSS animations
- **Croissance de plante** SVG animée
- **Intersection Observer** pour déclencher au scroll
- **Transitions fluides** entre les sections

### Architecture Moderne
- **Composants Standalone** Angular
- **Reactive Forms** pour la validation
- **JWT sécurisé** avec refresh
- **API RESTful** bien structurée

### Performance & UX
- **Lazy loading** des composants
- **Animations optimisées** (60fps)
- **Responsive design** adaptatif
- **Loading states** élégants

## 🎭 Expérience Utilisateur

L'utilisateur découvre :
1. **Page d'accueil** avec pluie qui fait pousser une plante au scroll
2. **Services** avec animations thématiques aquatiques
3. **Interface admin** moderne et intuitive
4. **Transitions** fluides entre toutes les sections

## 🔮 Technologies Utilisées

**Frontend :**
- Angular 16+ (Standalone Components)
- TypeScript
- SCSS avec animations CSS
- RxJS pour la réactivité

**Backend :**
- Spring Boot 3.1
- Spring Security + JWT
- JPA/Hibernate
- H2/PostgreSQL

**Outils :**
- Maven (Backend)
- Angular CLI (Frontend)
- Git pour versioning

## 🎨 Thème Hydrogéologique Intégré

Chaque animation et effet visuel rappelle l'eau et l'hydrogéologie :
- **Gouttes de pluie** qui tombent
- **Plante qui pousse** (cycle de l'eau)
- **Vagues et flux** dans les transitions
- **Particules aquatiques** en arrière-plan

