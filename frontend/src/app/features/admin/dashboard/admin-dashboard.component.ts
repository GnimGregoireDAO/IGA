import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <!-- Section d'en-tête avec navigation -->
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
          <button class="logout-btn" (click)="logout()">
            <span class="btn-icon">🚪</span>
            Déconnexion
          </button>
        </div>
      </div>

      <header class="dashboard-header">
        <h1>Tableau de bord IGA</h1>
      </header>

      <div class="dashboard-content">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">💧</div>
            <div class="stat-info">
              <h3>{{ stats.waterTreatment }}</h3>
              <p>Stations actives</p>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">📊</div>
            <div class="stat-info">
              <h3>{{ stats.monitoring }}</h3>
              <p>Capteurs en ligne</p>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">🌱</div>
            <div class="stat-info">
              <h3>{{ stats.projects }}</h3>
              <p>Projets actifs</p>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">⚠️</div>
            <div class="stat-info">
              <h3>{{ stats.alerts }}</h3>
              <p>Alertes ouvertes</p>
            </div>
          </div>
        </div>

        <div class="dashboard-sections">
          <section class="recent-alerts">
            <h2>Alertes récentes</h2>
            <div class="alert-list">
              <div *ngFor="let alert of recentAlerts" class="alert-item" [class]="'alert-' + alert.type">
                <div class="alert-content">
                  <strong>{{ alert.title }}</strong>
                  <p>{{ alert.message }}</p>
                  <small>{{ alert.timestamp }}</small>
                </div>
              </div>
            </div>
          </section>

          <section class="system-status">
            <h2>État du système</h2>
            <div class="status-list">
              <div *ngFor="let system of systemStatus" class="status-item">
                <div class="status-indicator" [class]="'status-' + system.status"></div>
                <div class="status-info">
                  <strong>{{ system.name }}</strong>
                  <p>{{ system.description }}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      min-height: 100vh;
      background: #f5f7fa;
    }

    .admin-header-section {
      background: #343a40;
      color: white;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .admin-access-notice {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .notice-icon {
      font-size: 2rem;
    }

    .notice-content h2 {
      margin: 0;
      font-size: 1.5rem;
    }

    .notice-content p {
      margin: 0;
      font-size: 0.9rem;
    }

    .navigation-controls {
      display: flex;
      gap: 1rem;
    }

    .home-btn, .logout-btn {
      background: #007bff;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .home-btn:hover, .logout-btn:hover {
      background: #0056b3;
    }

    .dashboard-header {
      background: white;
      padding: 1rem 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .dashboard-header h1 {
      color: #2c3e50;
      margin: 0;
    }

    .logout-btn {
      background: #e74c3c;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s;
    }

    .logout-btn:hover {
      background: #c0392b;
    }

    .dashboard-content {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .stat-card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .stat-icon {
      font-size: 2.5rem;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ecf0f1;
      border-radius: 50%;
    }

    .stat-info h3 {
      font-size: 2rem;
      margin: 0;
      color: #2c3e50;
    }

    .stat-info p {
      margin: 0;
      color: #7f8c8d;
      font-size: 0.9rem;
    }

    .dashboard-sections {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .recent-alerts, .system-status {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .recent-alerts h2, .system-status h2 {
      margin-top: 0;
      color: #2c3e50;
      border-bottom: 2px solid #ecf0f1;
      padding-bottom: 0.5rem;
    }

    .alert-item {
      padding: 1rem;
      margin-bottom: 0.5rem;
      border-radius: 4px;
      border-left: 4px solid #bdc3c7;
    }

    .alert-warning {
      background: #fff3cd;
      border-left-color: #ffc107;
    }

    .alert-error {
      background: #f8d7da;
      border-left-color: #dc3545;
    }

    .alert-info {
      background: #d1ecf1;
      border-left-color: #17a2b8;
    }

    .alert-content strong {
      display: block;
      margin-bottom: 0.25rem;
    }

    .alert-content p {
      margin: 0 0 0.25rem 0;
      font-size: 0.9rem;
    }

    .alert-content small {
      color: #6c757d;
      font-size: 0.8rem;
    }

    .status-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.75rem 0;
      border-bottom: 1px solid #ecf0f1;
    }

    .status-indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }

    .status-online {
      background: #28a745;
    }

    .status-warning {
      background: #ffc107;
    }

    .status-offline {
      background: #dc3545;
    }

    .status-info strong {
      display: block;
      margin-bottom: 0.25rem;
    }

    .status-info p {
      margin: 0;
      font-size: 0.9rem;
      color: #6c757d;
    }

    @media (max-width: 768px) {
      .dashboard-sections {
        grid-template-columns: 1fr;
      }
      
      .stats-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AdminDashboardComponent {
  stats = {
    waterTreatment: 12,
    monitoring: 156,
    projects: 8,
    alerts: 3
  };

  recentAlerts = [
    {
      type: 'warning',
      title: 'Maintenance programmée',
      message: 'Station de traitement #3 - Maintenance dans 2 jours',
      timestamp: 'Il y a 2 heures'
    },
    {
      type: 'error',
      title: 'Capteur défaillant',
      message: 'Capteur pH - Zone industrielle hors service',
      timestamp: 'Il y a 4 heures'
    },
    {
      type: 'info',
      title: 'Nouveau projet',
      message: 'Installation capteurs IoT - Secteur résidentiel',
      timestamp: 'Il y a 1 jour'
    }
  ];

  systemStatus = [
    {
      name: 'Station principale',
      description: 'Fonctionnement normal',
      status: 'online'
    },
    {
      name: 'Réseau de capteurs',
      description: '1 capteur en maintenance',
      status: 'warning'
    },
    {
      name: 'Système de backup',
      description: 'Opérationnel',
      status: 'online'
    },
    {
      name: 'API externe',
      description: 'Connexion stable',
      status: 'online'
    }
  ];

  constructor(private router: Router) {}

  logout() {
    // Simulation de la déconnexion
    this.router.navigate(['/admin/login']);
  }

  goToHome() {
    // Navigation vers la page d'accueil
    this.router.navigate(['/']);
  }
}
