import { Component } from '@angular/core';
import { FavoritosService } from '../../services/favoritos.service';
import { CardMovieComponent } from '../../card-movie/card-movie.component';

@Component({
  selector: 'app-search',
  imports: [CardMovieComponent],
  templateUrl: './search.component.html',
  styles: ``
})
export class SearchComponent {
  constructor(private favservice : FavoritosService) { }

  searchbyName(name: string) {
    this.favservice.searchbyName(name)
  }

  getdatosjson() {
    return this.favservice.getdatosjson()
  }

  
}
