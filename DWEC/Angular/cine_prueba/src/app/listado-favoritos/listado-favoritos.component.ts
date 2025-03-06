import { Component } from '@angular/core';
import { FavoritosService } from '../favoritos.service';

@Component({
  selector: 'app-listado-favoritos',
  templateUrl: './listado-favoritos.component.html',
  styles: `
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
    padding: 20px;
  }
`
})
export class ListadoFavoritosComponent {
  favoritos: any[] = [];

  constructor(private favoritosService: FavoritosService) {
    this.favoritos = this.favoritosService.obtenerLista();
  }

  borrarFavorito(id: string): void {
    this.favoritosService.borrar(id);
    this.favoritos = this.favoritosService.obtenerLista();
  }

  verDetalles(id: string): void {
    // Redirige al detalle
  }
}
