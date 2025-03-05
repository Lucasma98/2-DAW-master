import { Component, Input } from '@angular/core';
import { CartService } from '../../../servicios/cart.service';

@Component({
  selector: 'app-articulo-carrito',
  imports: [],
  templateUrl: './articulo-carrito.component.html',
  styleUrl: './articulo-carrito.component.css'
})

export class ArticuloCarritoComponent {
  @Input() datos: any;

  constructor(private carritoSrvc: CartService) { }

  aumentarCantidad() {
    this.carritoSrvc.actualizarCantidad(this.datos.id, this.datos.cantidad + 1);
  }

  restarCantidad() {
    this.carritoSrvc.actualizarCantidad(this.datos.id, this.datos.cantidad - 1);
  }

  eliminarArticulo() {
    this.carritoSrvc.eliminarArticulo(this.datos.id);
  }

}
