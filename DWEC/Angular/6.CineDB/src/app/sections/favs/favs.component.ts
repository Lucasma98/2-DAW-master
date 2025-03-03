import { Component } from '@angular/core';
import { CardMovieComponent } from '../card-movie/card-movie.component';
import { FavouriteService } from '../../services/favourite.service';
@Component({
  selector: 'app-favs',
  imports: [CardMovieComponent],
  templateUrl: './favs.component.html',
  styles: ``
})
export class FavsComponent {

  constructor(private FavouriteSrvc: FavouriteService){}

  getFavouriteMovies(){
    return this.FavouriteSrvc.getFavMovies()

  }

}
