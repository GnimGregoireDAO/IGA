# Architecture Frontend - IGA

## Vue d'ensemble
Le frontend est développé avec Angular 16+ pour offrir une expérience utilisateur moderne et immersive.

## Structure du projet Angular

```
src/
├── app/
│   ├── core/
│   │   ├── guards/
│   │   │   └── auth.guard.ts
│   │   ├── interceptors/
│   │   │   └── auth.interceptor.ts
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   ├── project.service.ts
│   │   │   └── api.service.ts
│   │   └── models/
│   │       ├── user.model.ts
│   │       ├── project.model.ts
│   │       └── service.model.ts
│   ├── shared/
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   ├── footer/
│   │   │   ├── loading/
│   │   │   └── rain-animation/
│   │   └── pipes/
│   ├── features/
│   │   ├── home/
│   │   │   ├── components/
│   │   │   │   ├── hero-section/
│   │   │   │   ├── rain-animation/
│   │   │   │   ├── services-preview/
│   │   │   │   └── contact-section/
│   │   │   └── home.component.ts
│   │   ├── about/
│   │   ├── services/
│   │   ├── projects/
│   │   ├── partners/
│   │   ├── contact/
│   │   └── admin/
│   │       ├── dashboard/
│   │       ├── project-management/
│   │       └── login/
│   └── app.component.ts
├── assets/
│   ├── images/
│   ├── icons/
│   └── animations/
└── styles/
    ├── _variables.scss
    ├── _mixins.scss
    └── main.scss
```

## Design System

### Palette de couleurs
```scss
$primary-blue: #0077C2;
$secondary-red: #D72638;
$accent-green: #4CAF50;
$neutral-white: #FFFFFF;
$text-dark: #1A1A1A;
$gradient-water: linear-gradient(135deg, #0077C2, #4CAF50);
```

### Animations spéciales
1. **Animation de pluie** sur la page d'accueil
2. **Transition de croissance de plante** au scroll
3. **Effet de vague** pour les transitions
4. **Parallax** pour les sections

## Composants innovants

### Rain Animation Component
- Gouttes d'eau animées en CSS/JavaScript
- Responsive et performant
- Synchronisé avec le scroll

### Plant Growth Animation
- SVG animé d'une pousse qui grandit
- Triggered par l'intersection observer
- Métaphore de l'expertise qui porte ses fruits

## Fonctionnalités UX

### Navigation fluide
- Menu sticky avec effet glassmorphism
- Smooth scroll entre sections
- Breadcrumbs dynamiques

### Microinteractions
- Hover effects sur les cartes
- Loading states élégants
- Feedback visuel sur les actions

### Responsive Design
- Mobile-first approach
- Breakpoints optimisés
- Touch-friendly sur mobile

## Technologies utilisées
- **Angular 16+** avec Standalone Components
- **Angular Material** pour les composants UI
- **SCSS** pour le styling avancé
- **Angular Animations** pour les transitions
- **Intersection Observer API** pour les animations au scroll
- **PWA** ready
