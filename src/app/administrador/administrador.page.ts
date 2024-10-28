import { Component } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage {
  constructor() {}

  agregarProducto() {
    console.log("Agregar producto");
  }

  editarProducto() {
    console.log("Editar producto");
  }

  eliminarProducto() {
    console.log("Eliminar producto");
  }
}
