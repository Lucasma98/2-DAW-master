import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FavouriteService } from '../../services/favourite.service';
import { BaseDeDatosService } from '../../services/BaseDeDatos.service';
import { CardMovieComponent } from '../card-movie/card-movie.component';

@Component({
  selector: 'app-search',
  imports: [FormsModule,CardMovieComponent],
  templateUrl: './search.component.html',
  styles: ``
})

export class SearchComponent {

  constructor( private api: BaseDeDatosService) {

  }

  movies: any[] = []


  consultarDatos(pattern: string) {
    this.api.searchMovies(pattern).subscribe(
      json => {
        let datos: any = json
        this.movies = datos.Search
      }
    )
  }


}
