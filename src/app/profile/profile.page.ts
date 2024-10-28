import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor() { }

  ngOnInit() {
    // Initialization logic here
  }

  cerrarSesion() {
    // Logic to handle logout
    console.log("Logged out!");
  }
}
