import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  message: string = 'Vous êtes déconnecté. (pikachu/pikachu)';
  name: string;
  password: string;
  auth: AuthService;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth = this.authService;
  }

  setMessage() {
    if (this.auth.isLoggedIn) {
      this.message = 'Vous êtes connécté';
    } else {
      this.message = 'Indentification ou un mot de passe incorrect';
    }
  }

  login() {
    this.message = 'Tentative de connexion en cours...';
    this.auth
      .login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if (isLoggedIn) {
          this.router.navigate(['/pokemon']);
        } else {
          this.password = '';
          this.router.navigate(['/login']);
        }
      });
  }
  logout() {
    this.auth.logout();
    this.message = 'Vous êtes déconnécté';
  }
}
