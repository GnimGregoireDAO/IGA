import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plant-growth',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="plant-container" #plantContainer>
      <svg class="plant-svg" viewBox="0 0 200 300" [class.growing]="isGrowing">
        <!-- Sol -->
        <rect x="0" y="250" width="200" height="50" fill="url(#soilGradient)" />
        
        <!-- Tige principale -->
        <path class="stem main-stem" 
              d="M100 250 Q95 200 100 150 Q105 100 100 50" 
              stroke="url(#stemGradient)" 
              stroke-width="4" 
              fill="none" />
        
        <!-- Feuilles -->
        <g class="leaves">
          <!-- Feuille gauche 1 -->
          <path class="leaf leaf-1" 
                d="M100 200 Q80 190 70 180 Q80 170 100 180" 
                fill="url(#leafGradient)" />
          
          <!-- Feuille droite 1 -->
          <path class="leaf leaf-2" 
                d="M100 200 Q120 190 130 180 Q120 170 100 180" 
                fill="url(#leafGradient)" />
          
          <!-- Feuille gauche 2 -->
          <path class="leaf leaf-3" 
                d="M100 140 Q75 130 65 120 Q75 110 100 120" 
                fill="url(#leafGradient)" />
          
          <!-- Feuille droite 2 -->
          <path class="leaf leaf-4" 
                d="M100 140 Q125 130 135 120 Q125 110 100 120" 
                fill="url(#leafGradient)" />
        </g>
        
        <!-- Fleur -->
        <g class="flower" transform="translate(100, 50)">
          <!-- Pétales -->
          <circle class="petal" cx="-8" cy="-8" r="6" fill="var(--secondary-red)" opacity="0.8" />
          <circle class="petal" cx="8" cy="-8" r="6" fill="var(--secondary-red)" opacity="0.8" />
          <circle class="petal" cx="-8" cy="8" r="6" fill="var(--secondary-red)" opacity="0.8" />
          <circle class="petal" cx="8" cy="8" r="6" fill="var(--secondary-red)" opacity="0.8" />
          <circle class="petal" cx="0" cy="-10" r="6" fill="var(--secondary-red)" opacity="0.9" />
          <circle class="petal" cx="0" cy="10" r="6" fill="var(--secondary-red)" opacity="0.9" />
          <circle class="petal" cx="-10" cy="0" r="6" fill="var(--secondary-red)" opacity="0.9" />
          <circle class="petal" cx="10" cy="0" r="6" fill="var(--secondary-red)" opacity="0.9" />
          
          <!-- Centre -->
          <circle cx="0" cy="0" r="4" fill="#FFD700" />
        </g>
        
        <!-- Gradients -->
        <defs>
          <linearGradient id="soilGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
          </linearGradient>
          
          <linearGradient id="stemGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#228B22;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#006400;stop-opacity:1" />
          </linearGradient>
          
          <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#32CD32;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#228B22;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#006400;stop-opacity:1" />
          </linearGradient>
        </defs>
      </svg>
      
      <div class="growth-text" [class.visible]="textVisible">
        <h3>Expertise qui grandit</h3>
        <p>Comme cette plante, notre savoir-faire en hydrogéologie s'épanouit grâce à votre confiance</p>
      </div>
    </div>
  `,
  styles: [`
    .plant-container {
      position: relative;
      width: 300px;
      height: 400px;
      margin: 0 auto;
      padding: 20px;
    }

    .plant-svg {
      width: 100%;
      height: 350px;
      transition: all 0.3s ease;
    }

    /* Animation de croissance */
    .stem {
      stroke-dasharray: 200;
      stroke-dashoffset: 200;
      transition: stroke-dashoffset 2s ease-in-out;
    }

    .leaf {
      opacity: 0;
      transform-origin: right center;
      transform: scale(0) rotate(-90deg);
      transition: all 0.8s ease-in-out;
    }

    .flower {
      opacity: 0;
      transform: scale(0);
      transform-origin: center;
      transition: all 1s ease-in-out;
    }

    .petal {
      transform: scale(0);
      transform-origin: center;
      transition: transform 0.3s ease-in-out;
    }

    /* État de croissance */
    .growing .stem {
      stroke-dashoffset: 0;
    }

    .growing .leaf-1 {
      opacity: 1;
      transform: scale(1) rotate(0deg);
      transition-delay: 1s;
    }

    .growing .leaf-2 {
      opacity: 1;
      transform: scale(1) rotate(0deg);
      transition-delay: 1.2s;
    }

    .growing .leaf-3 {
      opacity: 1;
      transform: scale(1) rotate(0deg);
      transition-delay: 1.8s;
    }

    .growing .leaf-4 {
      opacity: 1;
      transform: scale(1) rotate(0deg);
      transition-delay: 2s;
    }

    .growing .flower {
      opacity: 1;
      transform: scale(1);
      transition-delay: 2.5s;
    }

    .growing .petal {
      transform: scale(1);
      transition-delay: 2.8s;
    }

    .growing .petal:nth-child(even) {
      transition-delay: 3s;
    }

    /* Texte */
    .growth-text {
      text-align: center;
      margin-top: 20px;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.8s ease-in-out;
    }

    .growth-text.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .growth-text h3 {
      color: var(--accent-green);
      font-size: 1.5rem;
      margin-bottom: 10px;
      font-weight: 600;
    }

    .growth-text p {
      color: var(--text-dark);
      font-size: 1rem;
      line-height: 1.5;
      max-width: 280px;
      margin: 0 auto;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .plant-container {
        width: 250px;
        height: 350px;
      }
      
      .growth-text h3 {
        font-size: 1.3rem;
      }
      
      .growth-text p {
        font-size: 0.9rem;
      }
    }
  `]
})
export class PlantGrowthComponent implements OnInit {
  @ViewChild('plantContainer', { static: true }) plantContainer!: ElementRef;

  isGrowing = false;
  textVisible = false;
  private observer!: IntersectionObserver;

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    const options = {
      threshold: 0.3, // Démarre l'animation quand 30% du composant est visible
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startGrowthAnimation();
        }
      });
    }, options);

    if (this.plantContainer) {
      this.observer.observe(this.plantContainer.nativeElement);
    }
  }

  private startGrowthAnimation() {
    this.isGrowing = true;

    // Affiche le texte après que la plante ait poussé
    setTimeout(() => {
      this.textVisible = true;
    }, 3500);
  }
}
