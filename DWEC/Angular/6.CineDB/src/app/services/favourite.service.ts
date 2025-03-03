import { Injectable } from '@angular/core';
import { BaseDeDatosService } from './BaseDeDatos.service';


@Injectable({
  providedIn: 'root'
})

export class FavouriteService {

  constructor() {
    this.favouritesMovies = JSON.parse(localStorage.getItem("favourites") || "[]")
  }

  private favouritesMovies: any[] = []

  getFavMovies() {
    return this.favouritesMovies;
  }

  addToFavourite(movie:any){
    this.favouritesMovies.push(movie)
    this.saveInLs()
  }

  removeFromFavourite(movie :any){
    let indice = this.favouritesMovies.findIndex(m =>  m.imdbID == movie.imdbID)
    this.favouritesMovies.splice(indice,1)
    this.saveInLs()
  }

  isAlredyInFavourites(movie:any){
    return this.favouritesMovies.find(m => m.imdbID == movie.imdbID)
  }

  saveInLs(){
    localStorage.setItem("favourites", JSON.stringify(this.favouritesMovies))
  }

}
