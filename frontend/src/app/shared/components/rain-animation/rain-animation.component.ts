import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rain-animation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rain-container" #rainContainer>
      <div class="rain-drop" 
           *ngFor="let drop of rainDrops; trackBy: trackByIndex"
           [style.left.px]="drop.x"
           [style.animation-delay]="drop.delay + 's'"
           [style.animation-duration]="drop.duration + 's'">
      </div>
    </div>
  `,
  styles: [`
    .rain-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      pointer-events: none;
      overflow: hidden;
      z-index: 1;
    }

    .rain-drop {
      position: absolute;
      top: -10px;
      width: 2px;
      height: 15px;
      background: linear-gradient(to bottom, 
        rgba(0, 119, 194, 0.8) 0%, 
        rgba(0, 119, 194, 0.4) 50%, 
        transparent 100%);
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      animation: fall linear infinite;
      opacity: 0.7;
    }

    @keyframes fall {
      from {
        transform: translateY(-10px);
        opacity: 1;
      }
      to {
        transform: translateY(100vh);
        opacity: 0;
      }
    }

    .rain-drop:nth-child(odd) {
      width: 1.5px;
      height: 12px;
      opacity: 0.5;
    }

    .rain-drop:nth-child(3n) {
      width: 2.5px;
      height: 18px;
      opacity: 0.9;
    }
  `]
})
export class RainAnimationComponent implements OnInit, OnDestroy {
  @ViewChild('rainContainer', { static: true }) rainContainer!: ElementRef;

  rainDrops: Array<{x: number, delay: number, duration: number}> = [];
  private animationId: number = 0;

  ngOnInit() {
    this.generateRainDrops();
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  private generateRainDrops() {
    const containerWidth = window.innerWidth;
    const dropCount = Math.floor(containerWidth / 8); // Densité adaptative

    for (let i = 0; i < dropCount; i++) {
      this.rainDrops.push({
        x: Math.random() * containerWidth,
        delay: Math.random() * 2,
        duration: 1 + Math.random() * 2 // Entre 1 et 3 secondes
      });
    }
  }

  trackByIndex(index: number): number {
    return index;
  }
}
