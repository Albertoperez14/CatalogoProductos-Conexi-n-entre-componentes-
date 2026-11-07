import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Catalogo } from './catalogo/catalogo';

@Component({
  imports: [RouterOutlet,Catalogo],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('catalogoProductos');
  listaProductos: any[] = [
    {
      id: 1,
      nombre: 'Ratón',
      precio: 15,
      disponible: true
    },
    {
      id: 2,
      nombre: 'Teclado',
      precio: 30,
      disponible: true
    },
    {
      id: 3,
      nombre: 'Monitor',
      precio: 150,
      disponible: false
    }
  ];

  carrito: string[] = [];

  agregarAlCarrito(nombreProducto: string) {
    this.carrito.push(nombreProducto);
  }
}
