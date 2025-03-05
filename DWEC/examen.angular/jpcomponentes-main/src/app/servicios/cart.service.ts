import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private carrito: any[] = [];

  constructor() {
    this.carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
  }

  getCarrito() {
    return this.carrito;
  }

  precioTotal() {
    return this.carrito.reduce((acc, articulo) => acc + (articulo.precio * articulo.cantidad), 0);
  }

  addToCarrito(datos: any) {
    let articuloExistente = this.carrito.find(articulo => articulo.id === datos.id);
    if (!articuloExistente) {
      this.carrito.push({ ...datos, cantidad: 1 });
    } else {
      articuloExistente.cantidad++;
    }
    this.saveToLocalStorage();
  }

  actualizarCantidad(articuloID: number, cantidad: number) {
    let articuloExistente = this.carrito.find(articulo => articulo.id === articuloID);
    if (cantidad > 1) {
      articuloExistente.cantidad = cantidad;
    } else {
      articuloExistente.cantidad = 1;
    }
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  eliminarArticulo(articulo: number) {
    this.carrito = this.carrito.filter(a => a.id !== articulo);
    this.saveToLocalStorage();
  }

}
