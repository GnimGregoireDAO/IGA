import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header [class.scrolled]="isScrolled" class="main-header">
      <div class="container">
        <div class="logo-section">
          <img src="assets/logo.jpg" alt="Logo Groupe IGA" class="logo" />
          <div class="brand-text">
            <div class="brand-name">IGA</div>
            <div class="brand-tagline">L'eau en confiance</div>
          </div>
        </div>
        
        <!-- Navigation intégrée -->
        <div class="nav-wrapper">
          <nav [class.mobile-open]="isMobileMenuOpen">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Accueil</a>
            <a href="#expertises" (click)="scrollToSection('expertises', $event)" [class.active]="activeSection === 'expertises'">Nos expertises</a>
            <a href="#realisations" (click)="scrollToSection('realisations', $event)" [class.active]="activeSection === 'realisations'">Réalisations</a>
            <a href="#a-propos" (click)="scrollToSection('a-propos', $event)" [class.active]="activeSection === 'a-propos'">À propos</a>
            <a href="#contact" (click)="scrollToSection('contact', $event)" [class.active]="activeSection === 'contact'">Contact</a>
            <a routerLink="/admin/login" routerLinkActive="active" class="admin-link">Administration</a>
          </nav>

          <!-- Menu burger pour mobile -->
          <button class="mobile-menu-btn" (click)="toggleMobileMenu()" [class.active]="isMobileMenuOpen">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    /* Header fixe sans espace fantôme */
    .main-header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 70px; /* Hauteur fixe correspondant au padding-top */
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--gray-200);
      z-index: 1000;
      transition: var(--transition);
      margin: 0; /* Reset des marges */
      padding: 0; /* Reset du padding */
    }

    .main-header.scrolled {
      background: rgba(255, 255, 255, 0.98);
      box-shadow: var(--shadow-md);
      border-bottom-color: var(--gray-300);
    }

    .main-header .container {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0; /* Reset des marges */
      padding: 0 2rem; /* Padding horizontal uniquement */
    }

    .logo-section {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 0; /* Reset des marges */
    }

    .logo {
      height: 50px;
      width: auto;
      margin: 0; /* Reset des marges */
    }

    .brand-text {
      margin: 0; /* Reset des marges */
    }

    .brand-name {
      font-family: var(--font-display);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary);
      line-height: 1;
      margin: 0; /* Reset des marges */
    }

    .brand-tagline {
      font-size: 0.75rem;
      color: var(--gray-600);
      line-height: 1;
      margin: 0; /* Reset des marges */
    }

    .nav-wrapper {
      display: flex;
      align-items: center;
      margin: 0; /* Reset des marges */
    }

    nav {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin: 0; /* Reset des marges */
    }

    nav a {
      text-decoration: none;
      color: var(--gray-700);
      font-weight: 500;
      font-size: 0.95rem;
      transition: var(--transition);
      position: relative;
      padding: 0.5rem 0;
      margin: 0; /* Reset des marges */
    }

    nav a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--primary);
      transition: var(--transition);
    }

    nav a:hover,
    nav a.active {
      color: var(--primary);
    }

    nav a:hover::after,
    nav a.active::after {
      width: 100%;
    }

    .admin-link {
      background: var(--gradient-primary);
      color: white !important;
      padding: 0.5rem 1rem !important;
      border-radius: var(--radius);
      font-size: 0.875rem !important;
    }

    .admin-link::after {
      display: none;
    }

    .admin-link:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }

    .mobile-menu-btn {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      gap: 0.25rem;
      margin: 0; /* Reset des marges */
    }

    .mobile-menu-btn span {
      width: 25px;
      height: 3px;
      background: var(--gray-700);
      border-radius: 2px;
      transition: var(--transition);
      margin: 0; /* Reset des marges */
    }

    .mobile-menu-btn.active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    .mobile-menu-btn.active span:nth-child(2) {
      opacity: 0;
    }

    .mobile-menu-btn.active span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }

    /* Responsive */
    @media (max-width: 768px) {
      .main-header {
        height: 60px; /* Hauteur réduite sur mobile */
      }

      .mobile-menu-btn {
        display: flex;
      }

      nav {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(20px);
        flex-direction: column;
        gap: 0;
        padding: 1rem 0;
        border-top: 1px solid var(--gray-200);
        box-shadow: var(--shadow-md);
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: var(--transition);
      }

      nav.mobile-open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      nav a {
        padding: 1rem 2rem;
        width: 100%;
        text-align: left;
        border-bottom: 1px solid var(--gray-100);
      }

      nav a:last-child {
        border-bottom: none;
      }

      .brand-name {
        font-size: 1.25rem;
      }

      .brand-tagline {
        font-size: 0.7rem;
      }

      .logo {
        height: 40px;
      }
    }

    @media (max-width: 480px) {
      .main-header {
        height: 50px; /* Hauteur encore plus réduite sur très petit écran */
      }

      .main-header .container {
        padding: 0 1rem;
      }

      .logo-section {
        gap: 0.5rem;
      }

      .logo {
        height: 35px;
      }

      .brand-name {
        font-size: 1.1rem;
      }

      .brand-tagline {
        font-size: 0.65rem;
      }
    }
  `]
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = '';

  ngOnInit() {
    this.updateActiveSection();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
    this.updateActiveSection();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const headerHeight = this.getHeaderHeight();
      const targetPosition = targetSection.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Fermer le menu mobile après navigation
      this.isMobileMenuOpen = false;
    }
  }

  private updateActiveSection() {
    const sections = ['expertises', 'realisations', 'a-propos', 'contact'];
    const headerHeight = this.getHeaderHeight();

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= headerHeight + 100 && rect.bottom >= headerHeight) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  private getHeaderHeight(): number {
    if (window.innerWidth <= 480) return 50;
    if (window.innerWidth <= 768) return 60;
    return 70;
  }
}
