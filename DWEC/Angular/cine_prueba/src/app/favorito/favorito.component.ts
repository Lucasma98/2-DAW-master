import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styles: `

  .favorito {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
  }
`
})
export class FavoritoComponent {
  @Input() pelicula: any;
  @Output() borrarClick = new EventEmitter<string>();
  @Output() detallesClick = new EventEmitter<string>();

  verDetalles(): void {
    this.detallesClick.emit(this.pelicula.id);
  }

  borrar(): void {
    this.borrarClick.emit(this.pelicula.id);
  }
}
