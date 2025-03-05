import { Component } from '@angular/core';
import { ArticuloCarritoComponent } from './articulo-carrito/articulo-carrito.component';
import { CartService } from '../../servicios/cart.service';

@Component({
  selector: 'app-carrito',
  imports: [ArticuloCarritoComponent],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})

export class CarritoComponent {

  constructor(private carritoSrvc: CartService) { }

  getCarrito() {
    return this.carritoSrvc.getCarrito();
  }

  getPrecioCarrito() {
    return this.carritoSrvc.precioTotal();
  }

}
