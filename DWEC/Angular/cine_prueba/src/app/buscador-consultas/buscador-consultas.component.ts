import { Component } from '@angular/core';
import { BaseDatosCineService } from '../../services/base-datos-cine.service';
import { FavoritosService } from '../../services/favoritos.service';

@Component({
  selector: 'app-buscador-consultas',
  templateUrl: './buscador-consultas.component.html',
  styles: ``
})
export class BuscadorConsultasComponent {
  query = '';
  resultados: any[] = [];

  constructor(
    private baseDatosCineService: BaseDatosCineService,
    private favoritosService: FavoritosService
  ) {}

  buscar(): void {
    this.baseDatosCineService.buscarPeliculas(this.query).subscribe(data => {
      this.resultados = data.Search || [];
    });
  }

  añadirFavorito(pelicula: any): void {
    this.favoritosService.añadir(pelicula);
  }
}
