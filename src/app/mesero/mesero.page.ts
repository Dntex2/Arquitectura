import { Component } from '@angular/core';

@Component({
  selector: 'app-mesero',
  templateUrl: './mesero.page.html',
  styleUrls: ['./mesero.page.scss'],
})
export class MeseroPage {
  // Datos de ejemplo
  productos = [
    { nombre: 'Pizza Margarita', precio: 10, cantidad: 2 },
    { nombre: 'Pasta Carbonara', precio: 12, cantidad: 1 },
    { nombre: 'Ensalada César', precio: 8, cantidad: 3 },
  ];

  constructor() {}

  calcularTotal() {
    return this.productos.reduce((total, producto) => {
      return total + (producto.precio * producto.cantidad);
    }, 0);
  }
}

