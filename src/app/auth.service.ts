import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  redirecURL: string; //  une URL de direction
  // une variable qui me dis si l'utilisateur est connécter ou non
  // par défaut, l'utilisateur est déconnécté
  login(name: string, password: string): Observable<boolean> {
    const isLoggedIn = name == 'pikachu' && password == 'pikachu';

    // qui permet de connecter à l'utilisateur, c'est à lui de nous prouver qu'il a les bons identifiants
    return of(isLoggedIn).pipe(
      delay(1000),
      tap((isLoggedIn) => (this.isLoggedIn = isLoggedIn))
    );
  }

  logout() {
    this.isLoggedIn = false; // qui permet de se déconnécter
  }
}
