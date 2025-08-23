import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Section d'en-tête avec navigation et message d'accès restreint -->
    <div class="admin-header-section">
      <div class="admin-access-notice">
        <div class="notice-icon">🔒</div>
        <div class="notice-content">
          <h2>Zone d'Administration IGA</h2>
          <p>Accès restreint - Réservé au personnel autorisé de l'entreprise IGA</p>
        </div>
      </div>
      
      <div class="navigation-controls">
        <button class="home-btn" (click)="goToHome()">
          <span class="btn-icon">🏠</span>
          Retour à l'accueil
        </button>
      </div>
    </div>

    <div class="login-container">
      <div class="login-content">
        <div class="login-card">
          <div class="login-header">
            <h2>Administration IGA</h2>
            <p>Connectez-vous pour accéder au tableau de bord</p>
          </div>
          
          <form (ngSubmit)="onLogin()" class="login-form">
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                [(ngModel)]="credentials.email" 
                name="email"
                required 
                autocomplete="username"
              >
            </div>
            
            <div class="form-group">
              <label for="password">Mot de passe</label>
              <div class="password-field">
                <input 
                  [type]="showPassword ? 'text' : 'password'" 
                  id="password" 
                  [(ngModel)]="credentials.password" 
                  name="password"
                  required 
                  autocomplete="current-password"
                >
                <button 
                  type="button" 
                  class="password-toggle"
                  (click)="togglePassword()"
                >
                  {{ showPassword ? '🙈' : '👁️' }}
                </button>
              </div>
            </div>
            
            <div *ngIf="errorMessage" class="error-message">
              {{ errorMessage }}
            </div>
            
            <button type="submit" class="login-btn" [disabled]="isLoading">
              {{ isLoading ? 'Connexion...' : 'Se connecter' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* Structure principale */
    body, html {
      margin: 0;
      padding: 0;
    }

    .admin-header-section {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(52, 58, 64, 0.95);
      backdrop-filter: blur(10px);
      color: white;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .admin-access-notice {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .notice-icon {
      font-size: 1.5rem;
    }

    .notice-content h2 {
      margin: 0;
      font-size: 1.2rem;
      color: white;
    }

    .notice-content p {
      margin: 0;
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.8);
    }

    .navigation-controls {
      display: flex;
      gap: 1rem;
    }

    .home-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 0.75rem 1.5rem;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .home-btn:hover {
      background: #0056b3;
    }

    .login-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 1rem;
      padding-top: 120px; /* Compense le header fixe */
    }

    .login-content {
      width: 100%;
      max-width: 400px;
    }

    .login-card {
      background: white;
      border-radius: 15px;
      padding: 3rem 2rem;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .login-header {
      text-align: center;
      margin-bottom: 2.5rem;
    }

    .login-header h2 {
      color: #333;
      margin-bottom: 0.5rem;
      font-size: 1.8rem;
      font-weight: 700;
    }

    .login-header p {
      color: #666;
      font-size: 1rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.75rem;
      color: #333;
      font-weight: 600;
    }

    .form-group input {
      width: 100%;
      padding: 1rem;
      border: 2px solid #e1e5e9;
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    .form-group input:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .password-field {
      position: relative;
    }

    .password-toggle {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: #667eea;
      cursor: pointer;
      opacity: 0.7;
      transition: opacity 0.3s ease;
      font-size: 1.1rem;
    }

    .password-toggle:hover {
      opacity: 1;
    }

    .error-message {
      color: #e74c3c;
      font-size: 0.9rem;
      margin-top: 0.5rem;
      display: block;
      text-align: center;
      background: #ffeaea;
      padding: 0.75rem;
      border-radius: 6px;
      border: 1px solid #f5c6cb;
    }

    .login-btn {
      width: 100%;
      padding: 1.2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 1rem;
    }

    .login-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
    }

    .login-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none;
    }

    @media (max-width: 768px) {
      .admin-header-section {
        padding: 1rem;
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }

      .login-container {
        padding-top: 140px;
      }

      .login-card {
        padding: 2rem 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .admin-header-section {
        padding: 0.75rem;
      }

      .notice-content h2 {
        font-size: 1rem;
      }

      .notice-content p {
        font-size: 0.8rem;
      }

      .login-container {
        padding-top: 160px;
        padding: 0.5rem;
        padding-top: 160px;
      }

      .login-card {
        padding: 1.5rem;
      }
    }
  `]
})
export class AdminLoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  showPassword = false;
  isLoading = false;
  errorMessage = '';

  constructor(private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    this.isLoading = true;
    this.errorMessage = '';

    // Simulation d'une authentification
    setTimeout(() => {
      if (this.credentials.email === 'admin@iga.com' && this.credentials.password === 'admin123') {
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.errorMessage = 'Email ou mot de passe incorrect';
      }
      this.isLoading = false;
    }, 1000);
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
