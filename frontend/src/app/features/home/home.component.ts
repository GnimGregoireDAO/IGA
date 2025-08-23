import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PageLoaderComponent } from '../../shared/components/page-loader/page-loader.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, PageLoaderComponent, HeaderComponent, FooterComponent],
  template: `
    <!-- Loader au démarrage -->
    <app-page-loader></app-page-loader>
    <!-- Header avec animations -->
    <app-header></app-header>

    <div class="home-container">
      <!-- Hero Section principale "Experts en hydrogéologie" -->
      <section id="hero">
        <div class="container">
          <div class="hero-content">
            <!-- Animation de bienvenue -->
            <div class="welcome-animation" [class.visible]="welcomeVisible">
              <h1 class="welcome-text">
                <span class="welcome-word" [style.animation-delay.s]="0.5">Bienvenue</span>
                <span class="welcome-word" [style.animation-delay.s]="1">chez</span>
                <span class="welcome-word iga-highlight" [style.animation-delay.s]="1.5">IGA</span>
              </h1>
            </div>

            <!-- Contenu principal après animation -->
            <div class="main-content" [class.visible]="mainContentVisible">
              <h2>Experts en hydrogéologie depuis 15 ans</h2>
              <p>Nous accompagnons vos projets avec rigueur, réactivité et transparence. De l'étude de faisabilité à la réalisation, notre expertise technique garantit la réussite de vos projets liés aux ressources en eau.</p>

              <div class="hero-stats">
                <div class="stat">
                  <span class="stat-number" #statNumber1>200+</span>
                  <span class="stat-label">Projets réalisés</span>
                </div>
                <div class="stat">
                  <span class="stat-number" #statNumber2>15</span>
                  <span class="stat-label">Années d'expérience</span>
                </div>
                <div class="stat">
                  <span class="stat-number" #statNumber3>50+</span>
                  <span class="stat-label">Clients satisfaits</span>
                </div>
              </div>

              <a href="#contact" class="cta" (click)="scrollToSection('contact', $event)">
                Demander un devis gratuit
                <span>→</span>
              </a>
            </div>

            <!-- Animation de particules d'eau -->
            <div class="water-particles">
              <div class="particle" *ngFor="let particle of particles" 
                   [style.left.px]="particle.x" 
                   [style.top.px]="particle.y"
                   [style.animation-delay.s]="particle.delay">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section de transition animée -->
      <section class="transition-section">
        <div class="transition-animation">
          <div class="wave wave-1"></div>
          <div class="wave wave-2"></div>
          <div class="wave wave-3"></div>
        </div>
      </section>

      <!-- Hero Section secondaire "Mission Africaine" -->
      <section class="hero-section secondary-hero">
        <div class="hero-content">
          <h1>Ensemble pour une eau potable partout en Afrique</h1>
          <p class="hero-subtitle">Notre vision dépasse les frontières. Nous œuvrons pour un accès universel à l'eau potable sur tout le continent africain, en combinant expertise technique et impact social durable.</p>
        </div>
        <div class="hero-animation">
          <div class="water-drop"></div>
        </div>
      </section>

      <!-- Expertises Section -->
      <section id="expertises" class="section">
        <div class="container">
          <h2>Nos domaines d'expertise</h2>
          <p class="section-intro">Notre équipe pluridisciplinaire vous accompagne dans tous vos projets liés aux ressources en eau souterraine.</p>

          <div class="services-grid">
            <div class="service-card" #serviceCard>
              <div class="service-icon">💧</div>
              <h3>Hydrogéologie</h3>
              <p>Études hydrogéologiques complètes, modélisation des nappes, évaluation des ressources en eau souterraine et analyse de la qualité.</p>
              <ul>
                <li>Cartographie hydrogéologique</li>
                <li>Modélisation numérique</li>
                <li>Études d'impact</li>
                <li>Bilans hydriques</li>
              </ul>
            </div>

            <div class="service-card" #serviceCard>
              <div class="service-icon">🏗️</div>
              <h3>Forages & Captages</h3>
              <p>Conception, réalisation et maintenance de forages d'eau, puits et captages pour l'alimentation en eau potable et industrielle.</p>
              <ul>
                <li>Implantation de forages</li>
                <li>Suivi de réalisation</li>
                <li>Tests de pompage</li>
                <li>Maintenance préventive</li>
              </ul>
            </div>

            <div class="service-card" #serviceCard>
              <div class="service-icon">🔬</div>
              <h3>Analyses & Contrôles</h3>
              <p>Analyses physico-chimiques et bactériologiques, contrôle qualité des eaux, suivi environnemental et conformité réglementaire.</p>
              <ul>
                <li>Analyses qualité eau</li>
                <li>Suivi piézométrique</li>
                <li>Veille réglementaire</li>
                <li>Rapports de conformité</li>
              </ul>
            </div>

            <div class="service-card" #serviceCard>
              <div class="service-icon">📋</div>
              <h3>Études Techniques</h3>
              <p>Études de faisabilité, dimensionnement d'installations, assistance maîtrise d'œuvre et expertises techniques spécialisées.</p>
              <ul>
                <li>Études de faisabilité</li>
                <li>Assistance MOE</li>
                <li>Dimensionnement</li>
                <li>Expertises judiciaires</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Réalisations Section -->
      <section id="realisations" class="section">
        <div class="container">
          <h2>Nos réalisations</h2>
          <p class="section-intro">Découvrez quelques-uns de nos projets les plus significatifs qui illustrent notre savoir-faire technique et notre engagement qualité.</p>

          <div class="projects-grid">
            <div class="project-card" #projectCard>
              <div class="project-image">
                <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Alimentation en eau potable - Commune de Lomé">
                <div class="project-overlay">
                  <a href="#" class="project-overlay-btn">Voir le projet</a>
                </div>
              </div>
              <div class="project-content">
                <h3>Alimentation en eau potable - Commune de Lomé</h3>
                <p>Étude hydrogéologique complète et réalisation de 3 forages pour l'alimentation en eau potable de 15 000 habitants. Projet incluant la modélisation 3D des aquifères et le dimensionnement du réseau de distribution.</p>
                <div class="project-details">
                  <span class="project-type">Hydrogéologie</span>
                  <span class="project-year">2023</span>
                </div>
              </div>
            </div>

            <div class="project-card" #projectCard>
              <div class="project-image">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Complexe industriel - Zone franche">
                <div class="project-overlay">
                  <a href="#" class="project-overlay-btn">Voir le projet</a>
                </div>
              </div>
              <div class="project-content">
                <h3>Alimentation industrielle - Zone franche</h3>
                <p>Dimensionnement et réalisation du système d'approvisionnement en eau pour un complexe industriel de 50 hectares. Capacité de 2000 m³/jour avec système de traitement intégré.</p>
                <div class="project-details">
                  <span class="project-type">Forage industriel</span>
                  <span class="project-year">2023</span>
                </div>
              </div>
            </div>

            <div class="project-card" #projectCard>
              <div class="project-image">
                <img src="https://images.unsplash.com/photo-1581093458791-9d42e0d0a2a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Étude d'impact environnemental">
                <div class="project-overlay">
                  <a href="#" class="project-overlay-btn">Voir le projet</a>
                </div>
              </div>
              <div class="project-content">
                <h3>Étude d'impact environnemental - Carrière</h3>
                <p>Évaluation de l'impact d'une exploitation de carrière sur les ressources en eau souterraine et propositions de mesures compensatoires pour la protection des nappes phréatiques.</p>
                <div class="project-details">
                  <span class="project-type">Étude environnementale</span>
                  <span class="project-year">2022</span>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center">
            <a routerLink="/services" class="btn-secondary">Découvrir tous nos projets</a>
          </div>
        </div>
      </section>

      <!-- À propos Section -->
      <section id="a-propos" class="section">
        <div class="container">
          <div class="about-content">
            <div class="about-text">
              <h2>À propos d'IGA</h2>
              <p class="lead">Fondée en 2008, IGA (Ingénierie Géologique et Applications) s'est imposée comme un acteur de référence dans le domaine de l'hydrogéologie au Togo et en Afrique de l'Ouest.</p>

              <p>Notre mission est d'accompagner nos clients dans la gestion durable des ressources en eau souterraine, en alliant expertise technique de pointe et connaissance approfondie du contexte géologique local.</p>

              <p>Nous intervenons sur l'ensemble de la chaîne de valeur : de l'exploration et l'évaluation des ressources jusqu'à la conception et la réalisation d'ouvrages de captage, en passant par le suivi environnemental et la maintenance préventive.</p>

              <div class="values">
                <h3>Nos valeurs fondamentales</h3>
                <div class="values-grid">
                  <div class="value">
                    <h4>🎯 Rigueur scientifique</h4>
                    <p>Respect des normes techniques et environnementales les plus strictes, application des dernières méthodologies scientifiques et validation par des experts internationaux.</p>
                  </div>
                  <div class="value">
                    <h4>⚡ Réactivité opérationnelle</h4>
                    <p>Délais respectés, disponibilité permanente pour nos clients et capacité d'intervention rapide en cas d'urgence technique ou environnementale.</p>
                  </div>
                  <div class="value">
                    <h4>🤝 Transparence totale</h4>
                    <p>Communication claire et honnête tout au long des projets, rapports détaillés et accompagnement post-livraison pour garantir la pérennité des installations.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="about-stats">
              <h3>Notre expertise en chiffres</h3>
              <div class="stats-grid">
                <div class="stat-item">
                  <span class="big-number" #bigNumber1>200+</span>
                  <span class="stat-desc">Forages réalisés</span>
                </div>
                <div class="stat-item">
                  <span class="big-number" #bigNumber2>15</span>
                  <span class="stat-desc">Années d'expérience</span>
                </div>
                <div class="stat-item">
                  <span class="big-number" #bigNumber3>50+</span>
                  <span class="stat-desc">Clients accompagnés</span>
                </div>
                <div class="stat-item">
                  <span class="big-number" #bigNumber4>100%</span>
                  <span class="stat-desc">Projets réussis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Équipe Section -->
      <section id="equipe" class="section">
        <div class="container">
          <h2>Notre équipe d'experts</h2>
          <p class="section-intro">Une équipe de professionnels expérimentés et passionnés, reconnue pour son expertise technique et sa capacité d'innovation.</p>

          <div class="team-grid">
            <div class="team-member" #teamMember>
              <div class="member-photo">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Directeur Général">
              </div>
              <h3>Dr. Koffi MENSAH</h3>
              <p class="member-title">Directeur Général & Hydrogéologue</p>
              <p class="member-bio">15 ans d'expérience en hydrogéologie, PhD en Sciences de la Terre de l'Université de Lomé, spécialiste des aquifères sédimentaires et des études d'impact environnemental.</p>
              <div class="member-skills">
                <span class="skill-badge">Hydrogéologie</span>
                <span class="skill-badge">Modélisation</span>
                <span class="skill-badge">Management</span>
              </div>
            </div>

            <div class="team-member" #teamMember>
              <div class="member-photo">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b1e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Directeur Technique">
              </div>
              <h3>Ing. Ama KPODZI</h3>
              <p class="member-title">Directrice Technique</p>
              <p class="member-bio">Ingénieure en génie civil, 12 ans d'expérience dans la réalisation de forages et l'hydraulique. Experte en dimensionnement d'installations et suivi de chantiers.</p>
              <div class="member-skills">
                <span class="skill-badge">Génie Civil</span>
                <span class="skill-badge">Forages</span>
                <span class="skill-badge">Hydraulique</span>
              </div>
            </div>

            <div class="team-member" #teamMember>
              <div class="member-photo">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Responsable Laboratoire">
              </div>
              <h3>Dr. Yao AKPAKI</h3>
              <p class="member-title">Responsable Laboratoire</p>
              <p class="member-bio">Chimiste spécialisé en analyses des eaux, 10 ans d'expérience en contrôle qualité et conformité réglementaire. Certifié ISO 17025 pour les analyses physico-chimiques.</p>
              <div class="member-skills">
                <span class="skill-badge">Chimie</span>
                <span class="skill-badge">Analyses</span>
                <span class="skill-badge">Qualité</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Partenaires -->
      <section id="partenaires" class="section">
        <div class="container">
          <h2>Nos partenaires institutionnels</h2>
          <p class="section-intro">Nous collaborons avec des institutions nationales et internationales de référence pour garantir l'excellence de nos prestations.</p>

          <div class="partners-grid">
            <div class="partner-logo">
              <img src="https://via.placeholder.com/150x80/e2e8f0/64748b?text=Ministère+de+l'Eau" alt="Ministère de l'Eau et de l'Assainissement">
            </div>
            <div class="partner-logo">
              <img src="https://via.placeholder.com/150x80/e2e8f0/64748b?text=BRGM" alt="Bureau de Recherches Géologiques et Minières">
            </div>
            <div class="partner-logo">
              <img src="https://via.placeholder.com/150x80/e2e8f0/64748b?text=AFD" alt="Agence Française de Développement">
            </div>
            <div class="partner-logo">
              <img src="https://via.placeholder.com/150x80/e2e8f0/64748b?text=Banque+Mondiale" alt="Banque Mondiale">
            </div>
            <div class="partner-logo">
              <img src="https://via.placeholder.com/150x80/e2e8f0/64748b?text=UNICEF" alt="UNICEF">
            </div>
            <div class="partner-logo">
              <img src="https://via.placeholder.com/150x80/e2e8f0/64748b?text=Union+Européenne" alt="Union Européenne">
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="section contact-section">
        <div class="container">
          <h2>Démarrons votre projet ensemble</h2>
          <p class="section-intro">Prêt à démarrer votre projet ? Notre équipe est à votre disposition pour étudier vos besoins et vous proposer une solution sur-mesure.</p>

          <div class="contact-content">
            <div class="contact-info">
              <h3>Contactez nos experts</h3>

              <div class="contact-item">
                <strong>📍 Notre siège social</strong>
                <p>123 Boulevard de la Paix<br>Quartier Administratif<br>Lomé, Togo</p>
              </div>

              <div class="contact-item">
                <strong>📞 Nos lignes directes</strong>
                <p>+228 22 XX XX XX (Bureau)<br>+228 90 XX XX XX (Urgences)</p>
              </div>

              <div class="contact-item">
                <strong>📧 Nos emails</strong>
                <p>contact@iga-togo.com<br>commercial@iga-togo.com</p>
              </div>

              <div class="contact-item">
                <strong>🕒 Horaires d'ouverture</strong>
                <p>Lundi - Vendredi : 8h00 - 17h30<br>Samedi : 8h00 - 12h30</p>
              </div>
            </div>

            <div class="contact-form">
              <h3>Demande de devis personnalisé</h3>
              <form (ngSubmit)="onSubmitContact()" #contactForm="ngForm">
                <div class="form-row">
                  <div class="form-group">
                    <label for="nom">Nom *</label>
                    <input type="text" id="nom" name="nom" [(ngModel)]="contactData.nom" required>
                  </div>
                  <div class="form-group">
                    <label for="prenom">Prénom *</label>
                    <input type="text" id="prenom" name="prenom" [(ngModel)]="contactData.prenom" required>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="email">Adresse email *</label>
                    <input type="email" id="email" name="email" [(ngModel)]="contactData.email" required>
                  </div>
                  <div class="form-group">
                    <label for="telephone">Téléphone</label>
                    <input type="tel" id="telephone" name="telephone" [(ngModel)]="contactData.telephone">
                  </div>
                </div>

                <div class="form-group">
                  <label for="entreprise">Entreprise / Organisation</label>
                  <input type="text" id="entreprise" name="entreprise" [(ngModel)]="contactData.entreprise" placeholder="Nom de votre structure">
                </div>

                <div class="form-group">
                  <label for="service">Type de prestation recherchée</label>
                  <select id="service" name="service" [(ngModel)]="contactData.service">
                    <option value="">Sélectionnez un domaine</option>
                    <option value="hydrogéologie">Étude hydrogéologique complète</option>
                    <option value="forage">Forage et captage d'eau</option>
                    <option value="analyse">Analyses et contrôles qualité</option>
                    <option value="etude">Étude technique et faisabilité</option>
                    <option value="expertise">Expertise et audit</option>
                    <option value="autre">Autre prestation</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="message">Description détaillée de votre projet *</label>
                  <textarea id="message" name="message" rows="6" [(ngModel)]="contactData.message" required placeholder="Décrivez votre projet : objectifs, localisation, contraintes, délais souhaités, budget approximatif..."></textarea>
                </div>

                <button type="submit" class="btn-primary" [disabled]="!contactForm.form.valid">
                  Envoyer ma demande
                  <span>→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Footer avec animations -->
    <app-footer></app-footer>
  `,
  styles: [`
    /* Corps principal avec padding pour header fixe */
    .home-container {
      min-height: 100vh;
      padding-top: 70px; /* Ajusté pour correspondre exactement à la hauteur du header */
      margin: 0; /* Reset explicite des marges */
    }

    /* Hero Section style original "Bienvenue chez IGA" */
    .hero-section {
      min-height: 100vh;
      background: linear-gradient(135deg, #0077C2 0%, #4CAF50 100%);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 2rem 5%;
      color: white;
      position: relative;
      overflow: hidden;
    }

    .hero-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image:
        radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%);
      pointer-events: none;
    }

    .hero-content {
      flex: 1;
      max-width: 600px;
      position: relative;
      z-index: 2;
    }

    .hero-content h1 {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      animation: fadeInUp 1s ease-out;
      font-family: var(--font-display);
      background: linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.9) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
      animation: fadeInUp 1s ease-out 0.2s both;
      line-height: 1.6;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      animation: fadeInUp 1s ease-out 0.4s both;
      flex-wrap: wrap;
    }

    .btn {
      padding: 1rem 2rem;
      border-radius: 10px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-block;
      position: relative;
      overflow: hidden;
    }

    .btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: var(--transition);
    }

    .btn:hover::before {
      left: 100%;
    }

    .btn-primary {
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(20px);
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.3);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.25);
    }

    .btn-secondary {
      background: var(--energy);
      color: white;
      border: 2px solid var(--energy);
    }

    .btn-secondary:hover {
      background: var(--energy-light);
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(239, 68, 68, 0.3);
    }

    .hero-animation {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 2;
    }

    .water-drop {
      width: 200px;
      height: 240px;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(20px);
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      animation: float 3s ease-in-out infinite;
      position: relative;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    .water-drop::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 150px;
      height: 180px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      animation: pulse 2s ease-in-out infinite;
    }

    .water-drop::after {
      content: '💧';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 3rem;
      animation: bounce 2s ease-in-out infinite;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes float {
      0%, 100% { 
        transform: translateY(0px) rotate(0deg); 
      }
      50% { 
        transform: translateY(-20px) rotate(2deg); 
      }
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 0.6;
        transform: translate(-50%, -50%) scale(1);
      }
      50% {
        opacity: 0.8;
        transform: translate(-50%, -50%) scale(1.05);
      }
    }

    @keyframes bounce {
      0%, 100% {
        transform: translate(-50%, -50%) scale(1);
      }
      50% {
        transform: translate(-50%, -50%) scale(1.1);
      }
    }

    /* Hero section premium (cachée pour l'instant) */
    #hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      background: var(--gradient-hero);
      color: white;
      position: relative;
      overflow: hidden;
    }

    #hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image:
        radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%);
      pointer-events: none;
    }

    #hero .container {
      text-align: center;
      position: relative;
      z-index: 2;
    }

    .hero-content {
      max-width: 900px;
      margin: 0 auto;
      position: relative;
    }

    /* Animation "Bienvenue chez IGA" */
    .welcome-animation {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      opacity: 1;
      transition: opacity 1s ease-out;
      z-index: 3;
    }

    .welcome-animation:not(.visible) {
      opacity: 0;
      pointer-events: none;
    }

    .welcome-text {
      font-family: var(--font-display);
      font-size: clamp(3rem, 8vw, 6rem);
      font-weight: 700;
      margin: 0;
      line-height: 1.1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .welcome-word {
      display: inline-block;
      opacity: 0;
      animation: welcomeSlideIn 1s ease-out forwards;
    }

    .iga-highlight {
      background: linear-gradient(135deg, #ffffff 0%, var(--accent-light) 50%, #ffffff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-size: 1.2em;
      text-shadow: 0 0 30px rgba(16, 185, 129, 0.5);
    }

    @keyframes welcomeSlideIn {
      0% {
        opacity: 0;
        transform: translateY(50px) scale(0.8);
      }
      60% {
        opacity: 1;
        transform: translateY(-10px) scale(1.1);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    /* Contenu principal */
    .main-content {
      opacity: 0;
      transform: translateY(30px);
      transition: all 1s ease-out;
    }

    .main-content.visible {
      opacity: 1;
      transform: translateY(0);
    }

    #hero h2 {
      font-family: var(--font-display);
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 1.1;
      letter-spacing: -0.02em;
      background: linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.8) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    #hero p {
      font-size: 1.25rem;
      margin-bottom: 3rem;
      opacity: 0.95;
      line-height: 1.8;
      font-weight: 400;
    }

    /* Particules d'eau animées */
    .water-particles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }

    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      animation: floatParticle 6s linear infinite;
    }

    @keyframes floatParticle {
      0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100px) rotate(360deg);
        opacity: 0;
      }
    }

    /* Statistiques hero avec glassmorphism */
    .hero-stats {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin: 4rem 0;
      flex-wrap: wrap;
    }

    .stat {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 2rem 1.5rem;
      border-radius: var(--radius-lg);
      text-align: center;
      min-width: 160px;
      transition: var(--transition);
      animation: statSlideUp 0.8s ease-out forwards;
      opacity: 0;
      transform: translateY(50px);
    }

    .stat:nth-child(1) { animation-delay: 0.2s; }
    .stat:nth-child(2) { animation-delay: 0.4s; }
    .stat:nth-child(3) { animation-delay: 0.6s; }

    @keyframes statSlideUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .stat:hover {
      transform: translateY(-5px) scale(1.05);
      background: rgba(255, 255, 255, 0.15);
    }

    .stat-number {
      display: block;
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 0.5rem;
      background: linear-gradient(135deg, #ffffff 0%, var(--accent-light) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .stat-label {
      font-size: 0.95rem;
      opacity: 0.9;
      font-weight: 500;
    }

    /* Boutons premium avec glassmorphism */
    .cta, .btn-primary, .btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 2.5rem;
      border-radius: var(--radius-lg);
      font-weight: 600;
      text-decoration: none;
      transition: var(--transition);
      cursor: pointer;
      border: none;
      font-size: 1.1rem;
      position: relative;
      overflow: hidden;
      animation: ctaSlideIn 1s ease-out 0.8s forwards;
      opacity: 0;
      transform: translateY(30px);
    }

    @keyframes ctaSlideIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .cta::before,
    .btn-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: var(--transition);
    }

    .cta:hover::before,
    .btn-primary:hover::before {
      left: 100%;
    }

    .cta, .btn-primary {
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(20px);
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.3);
    }

    .cta:hover, .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-lg);
      background: rgba(255, 255, 255, 0.2);
    }

    .btn-secondary {
      background: transparent;
      color: var(--primary);
      border: 2px solid var(--primary);
    }

    .btn-secondary:hover {
      background: var(--primary);
      color: white;
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }

    /* Sections avec espacement premium */
    .section {
      padding: 6rem 0;
      position: relative;
    }

    .section:nth-child(even) {
      background: var(--gray-50);
    }

    .section h2 {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700;
      text-align: center;
      margin-bottom: 1.5rem;
      color: var(--gray-900);
      position: relative;
    }

    .section h2::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background: var(--gradient-primary);
      border-radius: 2px;
    }

    .section-intro {
      font-size: 1.25rem;
      text-align: center;
      color: var(--gray-600);
      max-width: 700px;
      margin: 0 auto 4rem;
      line-height: 1.8;
    }

    /* Services grid avec design premium */
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }

    .service-card {
      background: var(--white);
      padding: 2.5rem;
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow);
      transition: var(--transition);
      border: 1px solid var(--gray-200);
      position: relative;
      overflow: hidden;
      height: 100%;
    }

    .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: var(--gradient-primary);
      transform: scaleX(0);
      transform-origin: left;
      transition: var(--transition);
    }

    .service-card:hover::before {
      transform: scaleX(1);
    }

    .service-card:hover {
      transform: translateY(-10px);
      box-shadow: var(--shadow-xl);
      border-color: var(--primary);
    }

    .service-card:nth-child(2):hover {
      border-color: var(--accent);
    }

    .service-card:nth-child(3):hover {
      border-color: var(--energy);
    }

    .service-icon {
      width: 60px;
      height: 60px;
      background: var(--gradient-primary);
      border-radius: var(--radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      color: white;
      box-shadow: var(--shadow-md);
    }

    .service-card:nth-child(2) .service-icon {
      background: var(--gradient-accent);
    }

    .service-card:nth-child(3) .service-icon {
      background: linear-gradient(135deg, var(--energy) 0%, var(--energy-light) 100%);
    }

    .service-card h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--gray-900);
    }

    .service-card p {
      color: var(--gray-600);
      margin-bottom: 1.5rem;
      line-height: 1.7;
    }

    .service-card ul {
      list-style: none;
    }

    .service-card li {
      padding: 0.5rem 0;
      color: var(--gray-700);
      position: relative;
      padding-left: 2rem;
      transition: var(--transition-fast);
    }

    .service-card li::before {
      content: "✓";
      position: absolute;
      left: 0;
      top: 0.5rem;
      width: 20px;
      height: 20px;
      background: var(--accent);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: bold;
    }

    .service-card:hover li {
      color: var(--gray-900);
    }

    /* Projects Grid avec design masonry et overlay */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .project-card {
      background: var(--white);
      border-radius: var(--radius-xl);
      overflow: hidden;
      box-shadow: var(--shadow);
      transition: var(--transition);
      position: relative;
      border: 1px solid var(--gray-200);
    }

    .project-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--gradient-overlay);
      opacity: 0;
      transition: var(--transition);
      z-index: 2;
    }

    .project-card:hover::before {
      opacity: 0.1;
    }

    .project-card:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: var(--shadow-xl);
      border-color: var(--primary);
    }

    .project-image {
      height: 250px;
      overflow: hidden;
      position: relative;
    }

    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: var(--transition);
    }

    .project-card:hover .project-image img {
      transform: scale(1.1);
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(30, 79, 214, 0.8) 0%, rgba(16, 185, 129, 0.6) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: var(--transition);
      z-index: 3;
    }

    .project-card:hover .project-overlay {
      opacity: 1;
    }

    .project-overlay-btn {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.3);
      padding: 0.75rem 1.5rem;
      border-radius: var(--radius-lg);
      font-weight: 600;
      text-decoration: none;
      transition: var(--transition);
    }

    .project-overlay-btn:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: scale(1.05);
    }

    .project-content {
      padding: 2rem;
    }

    .project-content h3 {
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--gray-900);
      line-height: 1.3;
    }

    .project-content p {
      color: var(--gray-600);
      margin-bottom: 1.5rem;
      line-height: 1.7;
    }

    .project-details {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .project-type, .project-year {
      padding: 0.5rem 1rem;
      border-radius: var(--radius-lg);
      font-size: 0.875rem;
      font-weight: 600;
      border: 1px solid transparent;
      transition: var(--transition);
    }

    .project-type {
      background: var(--gradient-primary);
      color: white;
      box-shadow: var(--shadow-sm);
    }

    .project-year {
      background: var(--gray-100);
      color: var(--gray-700);
      border-color: var(--gray-200);
    }

    .project-card:hover .project-year {
      background: var(--white);
      border-color: var(--primary);
      color: var(--primary);
    }

    /* About Section premium */
    .about-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 5rem;
      align-items: start;
    }

    .about-text h2 {
      text-align: left;
      margin-bottom: 2rem;
    }

    .about-text h2::after {
      left: 0;
      transform: none;
    }

    .lead {
      font-size: 1.4rem;
      font-weight: 600;
      color: var(--primary);
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .about-text p {
      margin-bottom: 2rem;
      color: var(--gray-600);
      font-size: 1.1rem;
      line-height: 1.8;
    }

    .values {
      margin-top: 3rem;
    }

    .values h3 {
      font-size: 1.8rem;
      margin-bottom: 2rem;
      color: var(--gray-900);
      font-weight: 700;
    }

    .values-grid {
      display: grid;
      gap: 2rem;
    }

    .value {
      padding: 1.5rem;
      background: var(--gray-50);
      border-radius: var(--radius-lg);
      border-left: 4px solid var(--primary);
      transition: var(--transition);
    }

    .value:nth-child(2) {
      border-left-color: var(--accent);
    }

    .value:nth-child(3) {
      border-left-color: var(--energy);
    }

    .value:hover {
      background: var(--white);
      box-shadow: var(--shadow-md);
      transform: translateX(5px);
    }

    .value h4 {
      font-size: 1.2rem;
      margin-bottom: 0.75rem;
      color: var(--gray-900);
      font-weight: 600;
    }

    .value p {
      color: var(--gray-600);
      line-height: 1.6;
      margin: 0;
    }

    .about-stats {
      background: var(--white);
      padding: 3rem 2rem;
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-lg);
      border: 1px solid var(--gray-200);
      height: fit-content;
      position: sticky;
      top: 2rem;
    }

    .about-stats h3 {
      font-size: 1.8rem;
      margin-bottom: 2rem;
      color: var(--gray-900);
      text-align: center;
      font-weight: 700;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .stat-item {
      text-align: center;
      padding: 1rem;
      border-radius: var(--radius-lg);
      transition: var(--transition);
    }

    .stat-item:hover {
      background: var(--gray-50);
      transform: scale(1.05);
    }

    .big-number {
      display: block;
      font-size: 2.5rem;
      font-weight: 800;
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 0.5rem;
    }

    .stat-desc {
      font-size: 0.95rem;
      color: var(--gray-600);
      font-weight: 500;
    }

    /* Team Section avec cards flip */
    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2.5rem;
    }

    .team-member {
      background: var(--white);
      padding: 3rem 2rem;
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow);
      text-align: center;
      transition: var(--transition);
      border: 1px solid var(--gray-200);
      position: relative;
      overflow: hidden;
    }

    .team-member::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: var(--gradient-primary);
      transform: scaleX(0);
      transform-origin: center;
      transition: var(--transition);
    }

    .team-member:hover::before {
      transform: scaleX(1);
    }

    .team-member:nth-child(2)::before {
      background: var(--gradient-accent);
    }

    .team-member:nth-child(3)::before {
      background: linear-gradient(135deg, var(--energy) 0%, var(--energy-light) 100%);
    }

    .team-member:hover {
      transform: translateY(-10px);
      box-shadow: var(--shadow-xl);
      border-color: var(--primary);
    }

    .member-photo {
      width: 140px;
      height: 140px;
      margin: 0 auto 2rem;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid var(--white);
      box-shadow: var(--shadow-lg);
      position: relative;
      transition: var(--transition);
    }

    .member-photo::before {
      content: '';
      position: absolute;
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      border-radius: 50%;
      background: var(--gradient-primary);
      z-index: -1;
      transition: var(--transition);
    }

    .team-member:nth-child(2) .member-photo::before {
      background: var(--gradient-accent);
    }

    .team-member:nth-child(3) .member-photo::before {
      background: linear-gradient(135deg, var(--energy) 0%, var(--energy-light) 100%);
    }

    .team-member:hover .member-photo {
      transform: scale(1.1);
    }

    .member-photo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: var(--transition);
    }

    .team-member h3 {
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: var(--gray-900);
    }

    .member-title {
      color: var(--primary);
      font-weight: 600;
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
    }

    .member-bio {
      color: var(--gray-600);
      line-height: 1.7;
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }

    .member-skills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;
      margin-top: 1.5rem;
    }

    .skill-badge {
      background: var(--gray-100);
      color: var(--gray-700);
      padding: 0.25rem 0.75rem;
      border-radius: var(--radius-lg);
      font-size: 0.8rem;
      font-weight: 500;
      transition: var(--transition);
    }

    .team-member:hover .skill-badge {
      background: var(--primary);
      color: white;
    }

    /* Contact Section moderne */
    .contact-section {
      background: var(--gray-50);
      position: relative;
      overflow: hidden;
    }

    .contact-section::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      background: var(--gradient-primary);
      opacity: 0.05;
      transform: skewX(-15deg);
      transform-origin: top;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      position: relative;
      z-index: 2;
    }

    .contact-info {
      padding: 2rem 0;
    }

    .contact-info h3 {
      font-size: 2rem;
      margin-bottom: 2rem;
      color: var(--gray-900);
      font-weight: 700;
    }

    .contact-item {
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: var(--white);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
      border-left: 4px solid var(--primary);
      transition: var(--transition);
    }

    .contact-item:nth-child(even) {
      border-left-color: var(--accent);
    }

    .contact-item:hover {
      box-shadow: var(--shadow-md);
      transform: translateX(5px);
    }

    .contact-item strong {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: var(--primary);
      font-weight: 600;
      margin-bottom: 0.75rem;
      font-size: 1.1rem;
    }

    .contact-item p {
      color: var(--gray-600);
      margin: 0;
      line-height: 1.6;
    }

    /* Form premium avec glassmorphism */
    .contact-form {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      padding: 3rem;
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-xl);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .contact-form h3 {
      font-size: 2rem;
      margin-bottom: 2rem;
      color: var(--gray-900);
      font-weight: 700;
      text-align: center;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    .form-group {
      margin-bottom: 2rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.75rem;
      font-weight: 600;
      color: var(--gray-700);
      font-size: 1rem;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 1rem 1.25rem;
      border: 2px solid var(--gray-300);
      border-radius: var(--radius-lg);
      font-size: 1rem;
      transition: var(--transition);
      font-family: var(--font-primary);
      background: var(--white);
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 4px rgba(30, 79, 214, 0.1);
      transform: translateY(-2px);
    }

    .form-group textarea {
      resize: vertical;
      min-height: 140px;
    }

    .btn-primary {
      width: 100%;
      margin-top: 1rem;
      background: var(--gradient-primary);
      font-size: 1.1rem;
      padding: 1.25rem 2rem;
      justify-content: center;
    }

    /* Responsive amélioré */
    @media (max-width: 1024px) {
      .about-content {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .about-stats {
        position: static;
      }

      .contact-content {
        gap: 3rem;
      }
    }

    @media (max-width: 768px) {
      .home-container {
        padding-top: 60px; /* Synchronisé avec la hauteur du header sur tablette */
      }

      .welcome-text {
        font-size: clamp(2rem, 6vw, 4rem);
      }

      .hero-stats {
        gap: 1.5rem;
        margin: 2rem 0;
      }

      .stat {
        min-width: 140px;
        padding: 1.5rem 1rem;
      }

      .section {
        padding: 4rem 0;
      }

      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .form-row {
        grid-template-columns: 1fr;
      }

      .contact-form {
        padding: 2rem;
      }

      .services-grid,
      .projects-grid,
      .team-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 480px) {
      .home-container {
        padding-top: 50px; /* Synchronisé avec la hauteur du header sur mobile */
      }

      .welcome-text {
        gap: 0.25rem;
      }

      .hero-stats {
        flex-direction: column;
        gap: 1rem;
        align-items: center;
      }

      .stat {
        width: 100%;
        max-width: 200px;
      }
    }

    /* Animations spécifiques pour la nouvelle section hero */
    @keyframes slideIn {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes waveAnimation {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(10px);
      }
      100% {
        transform: translateX(0);
      }
    }

    /* Styles pour la section de transition animée */
    .transition-section {
      position: relative;
      overflow: hidden;
      height: 100px;
    }

    .transition-animation {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 200%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      animation: waveAnimation 6s ease-in-out infinite;
    }

    .wave {
      width: 50%;
      height: 100%;
      background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%);
      position: relative;
      overflow: hidden;
    }

    .wave::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 200%;
      height: 100%;
      background: inherit;
      animation: waveAnimation 4s ease-in-out infinite;
    }

    /* Styles pour la nouvelle section hero "Mission Africaine" */
    .mission-hero {
      background: linear-gradient(135deg, #0052D4 0%, #4364F7 50%, #6FB1FC 100%);
      color: white;
      position: relative;
      overflow: hidden;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 0 2rem;
    }

    .mission-content {
      position: relative;
      z-index: 2;
      padding: 2rem;
      border-radius: var(--radius-lg);
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .mission-icon {
      font-size: 4rem;
      margin-bottom: 1.5rem;
      position: relative;
    }

    .africa-symbol {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      font-size: 2.5rem;
    }

    .water-drops {
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 0.5rem;
    }

    .drop {
      font-size: 1.5rem;
      animation: dropAnimation 2s ease-in-out infinite;
    }

    @keyframes dropAnimation {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(10px);
      }
    }

    .mission-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      animation: slideIn 1s ease-out;
    }

    .mission-subtitle {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
      animation: slideIn 1s ease-out 0.2s both;
      line-height: 1.6;
    }

    .mission-values {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
      animation: slideIn 1s ease-out 0.4s both;
    }

    .value-card {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      border-radius: var(--radius-lg);
      padding: 1.5rem 2rem;
      text-align: center;
      transition: var(--transition);
      position: relative;
      overflow: hidden;
      width: 150px;
    }

    .value-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .value-icon {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      display: inline-block;
      transition: transform 0.3s ease;
    }

    .value-card:hover .value-icon {
      transform: scale(1.2);
    }

    .value-card span {
      display: block;
      font-weight: 600;
      color: var(--gray-900);
    }

    /* Animation de la terre tournante et du réseau d'eau */
    .rotating-earth {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      position: relative;
      margin: 0 auto;
      animation: rotate 10s linear infinite;
    }

    .continent {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 60%;
      height: 60%;
      background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/BlankMap-Africa.svg/2560px-BlankMap-Africa.svg.png') no-repeat center center;
      background-size: contain;
      transform: translate(-50%, -50%);
    }

    .water-network {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 80%;
      height: 80%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .network-point {
      width: 8px;
      height: 8px;
      background: var(--primary);
      border-radius: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
    }

    .connection-line {
      position: absolute;
      width: 2px;
      height: 50%;
      background: var(--primary);
      transform-origin: top;
    }

    .line-1 {
      top: 0;
      left: 25%;
      height: 40%;
      transform: rotate(45deg);
    }

    .line-2 {
      top: 0;
      left: 75%;
      height: 40%;
      transform: rotate(-45deg);
    }

    .line-3 {
      top: 50%;
      left: 50%;
      height: 50%;
      transform: rotate(90deg);
    }

    /* Responsive pour la nouvelle section hero */
    @media (max-width: 768px) {
      .mission-title {
        font-size: 2rem;
      }

      .mission-subtitle {
        font-size: 1rem;
      }

      .value-card {
        width: 120px;
      }
    }

    @media (max-width: 480px) {
      .mission-title {
        font-size: 1.5rem;
      }

      .mission-subtitle {
        font-size: 0.9rem;
      }

      .value-card {
        width: 100px;
      }
    }
  `]
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  // Variables pour les animations
  welcomeVisible = true;
  mainContentVisible = false;
  particles: Array<{x: number, y: number, delay: number}> = [];

  contactData = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: '',
    service: '',
    message: ''
  };
  @ViewChild('statNumber1') statNumber1!: ElementRef;
  @ViewChild('statNumber2') statNumber2!: ElementRef;
  @ViewChild('statNumber3') statNumber3!: ElementRef;
  @ViewChild('bigNumber1') bigNumber1!: ElementRef;
  @ViewChild('bigNumber2') bigNumber2!: ElementRef;
  @ViewChild('bigNumber3') bigNumber3!: ElementRef;
  @ViewChild('bigNumber4') bigNumber4!: ElementRef;

  showOriginalHero = false; // Contrôle l'affichage de la hero section originale

  ngOnInit() {
    this.initWelcomeAnimation();
    this.createWaterParticles();
    this.animateNumbers();
  }

  ngAfterViewInit() {
    // Initialiser les animations après que la vue soit complètement chargée
    setTimeout(() => {
      this.animateNumbers();
    }, 100);
  }

  ngOnDestroy() {
    // Nettoyer les éventuels timers ou subscriptions
    if (this.particles) {
      this.particles = [];
    }
  }

  private initWelcomeAnimation() {
    // Démarrer l'animation de bienvenue
    setTimeout(() => {
      this.welcomeVisible = false;

      // Afficher le contenu principal après l'animation de bienvenue
      setTimeout(() => {
        this.mainContentVisible = true;
      }, 1000);
    }, 4000); // Animation de bienvenue pendant 4 secondes
  }

  private createWaterParticles() {
    // Créer des particules d'eau pour l'animation
    for (let i = 0; i < 15; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * 100,
        delay: Math.random() * 6
      });
    }
  }

  scrollToSection(sectionId: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const headerHeight = 80;
      const targetPosition = targetSection.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  animateNumbers() {
    this.animateNumber(this.statNumber1.nativeElement, 0, 200, 2);
    this.animateNumber(this.statNumber2.nativeElement, 0, 15, 1);
    this.animateNumber(this.statNumber3.nativeElement, 0, 50, 2);
    this.animateNumber(this.bigNumber1.nativeElement, 0, 200, 2);
    this.animateNumber(this.bigNumber2.nativeElement, 0, 15, 1);
    this.animateNumber(this.bigNumber3.nativeElement, 0, 50, 2);
    this.animateNumber(this.bigNumber4.nativeElement, 0, 100, 1);
  }

  animateNumber(element: HTMLElement, start: number, end: number, duration: number) {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      element.innerText = Math.floor(progress * (end - start) + start).toString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  onSubmitContact() {
    if (confirm('Êtes-vous sûr de vouloir envoyer cette demande ?')) {
      // Logique d'envoi du formulaire
      console.log('Demande de contact envoyée:', this.contactData);
      alert('Votre demande a été envoyée avec succès !');
      this.resetForm();
    }
  }

  resetForm() {
    this.contactData = {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      entreprise: '',
      service: '',
      message: ''
    };
  }
}
