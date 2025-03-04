import { Component, Input } from '@angular/core';
import { FavoritosService } from '../services/favoritos.service';

@Component({
  selector: 'app-card-movie',
  imports: [],
  templateUrl: './card-movie.component.html',
  styles: ``
})
export class CardMovieComponent {
  constructor(private favorito:FavoritosService) { }
  @Input() movie: any

  addfavoritos(movie : any){
    this.favorito.addfavoritos(movie)
  }
  isAlreadyFavorito(movie: any){
    return this.favorito.isAlreadyFavorito(movie)
  }

}
