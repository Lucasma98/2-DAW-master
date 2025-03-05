import { Component, Input } from '@angular/core';
import { CarritoComponent } from '../carrito/carrito.component';
import { CartService } from '../../servicios/cart.service';

@Component({
  selector: 'app-articulo',
  imports: [],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})

export class ArticuloComponent {
  @Input() datos: any;

  constructor(private carritoSrvc: CartService) { }

  addToCarrito(datos: any) {
    this.carritoSrvc.addToCarrito(datos);
  }
}
