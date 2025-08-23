import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private apiUrl = 'http://localhost:3000/api'; // Ajustez selon votre backend

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    // Simulation d'une connexion pour le développement
    if (username === 'admin' && password === 'password') {
      this.isLoggedIn = true;
      localStorage.setItem('token', 'fake-jwt-token');
      return of({ success: true, token: 'fake-jwt-token' }).pipe(delay(1000));
    } else {
      return new Observable(observer => {
        setTimeout(() => {
          observer.error({ error: 'Invalid credentials' });
        }, 1000);
      });
    }

    // Pour une vraie API, utilisez ceci :
    // return this.http.post(`${this.apiUrl}/auth/login`, { username, password });
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn || !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
