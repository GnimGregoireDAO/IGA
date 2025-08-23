import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>IGA - Ingénierie Géologique</h4>
            <p>Votre partenaire de confiance pour tous vos projets liés aux ressources en eau souterraine. Excellence technique, innovation et respect de l'environnement depuis 2008.</p>
            <div class="social-links">
              <a href="#" class="social-link">Li</a>
              <a href="#" class="social-link">Fb</a>
              <a href="mailto:contact@iga-togo.com" class="social-link">@</a>
            </div>
          </div>

          <div class="footer-section">
            <h4>Nos prestations</h4>
            <ul>
              <li><a href="#expertises">Études hydrogéologiques</a></li>
              <li><a href="#expertises">Forages et captages</a></li>
              <li><a href="#expertises">Analyses et contrôles</a></li>
              <li><a href="#expertises">Études techniques</a></li>
              <li><a href="#expertises">Expertise environnementale</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Informations pratiques</h4>
            <p>123 Boulevard de la Paix<br>Quartier Administratif<br>Lomé, Togo</p>
            <p>📞 +228 22 XX XX XX</p>
            <p>📧 contact@iga-togo.com</p>
            <p>🕒 Lun-Ven: 8h-17h30 | Sam: 8h-12h30</p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2024 IGA - Ingénierie Géologique et Applications — Tous droits réservés | <a href="#">Mentions légales</a> | <a href="#">Politique de confidentialité</a> | <a href="#">Plan du site</a></p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    /* Footer moderne avec animations */
    footer {
      background: var(--dark);
      color: white;
      padding: 4rem 0 2rem;
      position: relative;
      overflow: hidden;
    }

    footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: var(--gradient-primary);
      animation: shimmer 3s ease-in-out infinite;
    }

    @keyframes shimmer {
      0%, 100% {
        opacity: 0.5;
        transform: scaleX(1);
      }
      50% {
        opacity: 1;
        transform: scaleX(1.02);
      }
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 3rem;
      margin-bottom: 3rem;
    }

    .footer-section {
      animation: fadeInUp 0.8s ease-out;
    }

    .footer-section:nth-child(1) {
      animation-delay: 0.1s;
    }

    .footer-section:nth-child(2) {
      animation-delay: 0.2s;
    }

    .footer-section:nth-child(3) {
      animation-delay: 0.3s;
    }

    .footer-section h4 {
      font-size: 1.4rem;
      margin-bottom: 1.5rem;
      color: white;
      font-weight: 700;
      position: relative;
    }

    .footer-section h4::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 40px;
      height: 2px;
      background: var(--gradient-primary);
      border-radius: 1px;
      animation: expand 1s ease-out 0.5s both;
    }

    @keyframes expand {
      from {
        width: 0;
      }
      to {
        width: 40px;
      }
    }

    .footer-section p {
      color: var(--gray-400);
      margin-bottom: 1.5rem;
      line-height: 1.7;
      transition: var(--transition);
    }

    .footer-section p:hover {
      color: var(--gray-300);
    }

    .footer-section ul {
      list-style: none;
    }

    .footer-section ul li {
      margin-bottom: 0.75rem;
      opacity: 0;
      animation: slideInLeft 0.6s ease-out forwards;
    }

    .footer-section ul li:nth-child(1) { animation-delay: 0.6s; }
    .footer-section ul li:nth-child(2) { animation-delay: 0.7s; }
    .footer-section ul li:nth-child(3) { animation-delay: 0.8s; }
    .footer-section ul li:nth-child(4) { animation-delay: 0.9s; }
    .footer-section ul li:nth-child(5) { animation-delay: 1s; }

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .footer-section ul li a {
      color: var(--gray-400);
      text-decoration: none;
      transition: var(--transition);
      padding: 0.25rem 0;
      display: inline-block;
      position: relative;
    }

    .footer-section ul li a::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--accent);
      transition: var(--transition);
    }

    .footer-section ul li a:hover::before {
      width: 100%;
    }

    .footer-section ul li a:hover {
      color: var(--accent);
      transform: translateX(5px);
    }

    /* Social links avec animations */
    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    .social-link {
      width: 45px;
      height: 45px;
      background: var(--gray-800);
      color: var(--gray-400);
      border-radius: var(--radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: var(--transition);
      font-weight: 600;
      position: relative;
      overflow: hidden;
      opacity: 0;
      animation: bounceIn 0.6s ease-out forwards;
    }

    .social-link:nth-child(1) { animation-delay: 1.2s; }
    .social-link:nth-child(2) { animation-delay: 1.3s; }
    .social-link:nth-child(3) { animation-delay: 1.4s; }

    @keyframes bounceIn {
      0% {
        opacity: 0;
        transform: scale(0.3);
      }
      50% {
        opacity: 1;
        transform: scale(1.1);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }

    .social-link::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: var(--gradient-primary);
      transition: var(--transition);
      z-index: -1;
    }

    .social-link:hover::before {
      left: 0;
    }

    .social-link:hover {
      color: white;
      transform: translateY(-3px) scale(1.1);
      box-shadow: var(--shadow-lg);
    }

    /* Footer bottom avec animation */
    .footer-bottom {
      border-top: 1px solid var(--gray-800);
      padding-top: 2rem;
      text-align: center;
      color: var(--gray-400);
      opacity: 0;
      animation: fadeIn 1s ease-out 1.5s forwards;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .footer-bottom a {
      color: var(--gray-400);
      text-decoration: none;
      transition: var(--transition);
      position: relative;
    }

    .footer-bottom a::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--accent);
      transition: var(--transition);
    }

    .footer-bottom a:hover::after {
      width: 100%;
    }

    .footer-bottom a:hover {
      color: var(--accent);
    }

    /* Responsive */
    @media (max-width: 768px) {
      footer {
        padding: 3rem 0 1.5rem;
      }

      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }

      .footer-section h4::after {
        left: 50%;
        transform: translateX(-50%);
      }

      .social-links {
        justify-content: center;
      }
    }

    @media (max-width: 480px) {
      .footer-content {
        gap: 1.5rem;
      }

      .footer-section h4 {
        font-size: 1.2rem;
      }

      .social-link {
        width: 40px;
        height: 40px;
      }
    }
  `]
})
export class FooterComponent {
  constructor() {}
}
