import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';  // Importar Router

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
})
export class InicioPage {
  cartCount = 0;  // Variable para el conteo del carrito

  constructor(private alertController: AlertController, private router: Router) {} // Inyectar Router

  async presentWelcomeAlert() {
    const storedUsername = localStorage.getItem('username');
    const alert = await this.alertController.create({
      header: `¡Bienvenido, ${storedUsername}!`,
      message: 'Gracias por usar nuestra aplicación!',
      buttons: ['OK']
    });

    await alert.present();
  }

  ionViewDidEnter() {
    this.presentWelcomeAlert();
  }

  addToCart() {
    this.cartCount++;  // Incrementa el contador cada vez que se añade un producto
  }

  irACarrito() {
    this.router.navigate(['/mesero']); // Redirige a la página del mesero
  }
}
