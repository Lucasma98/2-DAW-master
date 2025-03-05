import { Component } from '@angular/core';
import { BaseDatosArticulosService } from '../../servicios/base-datos-articulos.service';
import { ArticuloComponent } from '../articulo/articulo.component';

@Component({
  selector: 'app-inicio',
  imports: [ArticuloComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(private datos: BaseDatosArticulosService) { }

  getArticulos() {
    return this.datos.getArticulos();
  }
}
