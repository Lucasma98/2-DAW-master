import { Component, Input } from '@angular/core';
import { FavoritosService } from '../../services/favoritos.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorite',
  imports: [RouterLink ],
  templateUrl: './favorite.component.html',
  styles: ``
})
export class FavoriteComponent {

  constructor(private favoritoss:FavoritosService) { }

  getFavoritos(){
    return this.favoritoss.getFavoritos()
  }

  borrarFavoritos(movie: any){
    this.favoritoss.borrarFavoritos(movie)
  }
}
