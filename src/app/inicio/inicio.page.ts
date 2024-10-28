import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  cartCount: number = 0;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private navCtrl: NavController
  ) {}

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
    this.navCtrl.navigateForward('/carrito');  // Redirige a la página del carrito
  }

  irAMesero() {
    this.router.navigate(['/mesero']);  // Redirige a la pestaña mesero
  }

  irAMenuAdministrador() {
    this.navCtrl.navigateForward('/admin-menu');  // Redirige al menú del administrador
  }
}
