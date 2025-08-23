import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="page-loader" class="loader" [class.fade-out]="!isLoading">
      <div class="loader-content">
        <div class="loader-logo">
          <img [src]="logoPath" alt="IGA Logo" class="loader-logo-img">
          <div class="loader-brand">
            <h2>IGA</h2>
            <p>L'eau en confiance</p>
          </div>
        </div>
        <div class="loader-progress">
          <div class="loader-bar" [style.width.%]="progress"></div>
        </div>
        <p class="loader-text">Chargement en cours...</p>
      </div>
    </div>
  `,
  styles: [`
    /* Loader élégant avec logo */
    .loader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--gradient-hero);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      transition: opacity 0.5s ease, visibility 0.5s ease;
    }

    .loader.fade-out {
      opacity: 0;
      visibility: hidden;
    }

    .loader-content {
      text-align: center;
      color: white;
    }

    .loader-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      margin-bottom: 3rem;
      animation: fadeInUp 0.8s ease;
    }

    .loader-logo-img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      animation: pulse 2s infinite;
    }

    .loader-brand h2 {
      font-family: var(--font-display);
      font-size: 3rem;
      font-weight: 700;
      margin: 0;
      letter-spacing: 2px;
      animation: slideInRight 0.8s ease 0.2s both;
    }

    .loader-brand p {
      font-size: 1.2rem;
      font-weight: 300;
      margin: 0;
      opacity: 0.9;
      animation: slideInRight 0.8s ease 0.4s both;
    }

    .loader-progress {
      width: 300px;
      height: 4px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 2px;
      margin: 0 auto 1.5rem;
      overflow: hidden;
      animation: fadeInUp 0.8s ease 0.6s both;
    }

    .loader-bar {
      height: 100%;
      background: linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,1), rgba(255,255,255,0.8));
      border-radius: 2px;
      transition: width 0.3s ease;
    }

    .loader-text {
      font-size: 1rem;
      font-weight: 300;
      opacity: 0.8;
      animation: fadeInUp 0.8s ease 0.8s both;
    }

    /* Animations pour le loader */
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

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      }
      50% {
        transform: scale(1.05);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
      }
    }
  `]
})
export class PageLoaderComponent implements OnInit {
  @Input() logoPath: string = 'assets/logo.jpg';
  @Input() duration: number = 2000;

  isLoading = true;
  progress = 0;

  ngOnInit() {
    this.simulateLoading();
  }

  private simulateLoading() {
    const interval = setInterval(() => {
      this.progress += Math.random() * 15;

      if (this.progress >= 100) {
        this.progress = 100;
        clearInterval(interval);

        // Attendre un peu avant de masquer le loader
        setTimeout(() => {
          this.isLoading = false;
        }, 800);
      }
    }, 100);
  }
}
