import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = '';
  password: string = '';
  errorMessage: string = '';



  constructor(private router: Router) {}
  onSubmit() {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (this.username === storedUsername && this.password === storedPassword) {
      this.router.navigate(['/inicio']); 
    } else {
      this.errorMessage = 'Credenciales invalidas. Intentalo de nuevo.';
    }
  }
}
