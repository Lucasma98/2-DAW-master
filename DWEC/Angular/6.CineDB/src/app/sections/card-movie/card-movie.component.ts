import { Component, Input } from '@angular/core';
import { FavouriteService } from '../../services/favourite.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-movie',
  imports: [RouterLink],
  templateUrl: './card-movie.component.html',
  styles: ``
})

export class CardMovieComponent {

  @Input() movie: any;

  constructor(private favouritesSrvc: FavouriteService){}

  addToFavourite(movie :any){
    this.favouritesSrvc.addToFavourite(movie)

  }

  removeFromFavourite(movie :any){
    this.favouritesSrvc.removeFromFavourite(movie)
  }

  isAlredyInFavourites(movie:any){
    return this.favouritesSrvc.isAlredyInFavourites(movie)
  }

}
