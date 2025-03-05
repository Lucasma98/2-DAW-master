import { Injectable } from '@angular/core';
import { BaseDatosCineService } from './base-datos-cine.service';


@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  constructor(private dbservice: BaseDatosCineService) { 
    this.favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]')
  }

  //creo un array para guardar los datos del servicio(me guarda los datos de la busqueda)
  private datosjson: any[] = []

  getdatosjson() {
    return this.datosjson
  }

  //metodo para realizar la busqueda por nombre de las peliculas llamando al servicio
  searchbyName(name: string) {
    this.dbservice.getMoviesByTitle(name).subscribe
    (json => {
      let data : any = json
      this.datosjson = data.Search
      console.log(this.datosjson)
    })
  }

  //localstorage
  saveAll(){
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos))
  }

  //creo un array favoritos para guardar las peliculas favoritas
  private favoritos: any[] = []
  
  getFavoritos() {
    return this.favoritos
  }
  
  //funcion para comprobar si ya es favorito
  isAlreadyFavorito(movie: any) {
    return this.favoritos.find(fav => fav.imdbID === movie.imdbID)
  }
  
  //funcion para añadir a favoritos
  addfavoritos(movie: any) {
    if(!this.isAlreadyFavorito(movie)){
      this.favoritos.push(movie)
      this.saveAll()
    }
  }

  //funcion para borrar de favoritos
  borrarFavoritos(movie: any) {
    let index = this.favoritos.indexOf(movie)
    this.favoritos.splice(index, 1)
    this.saveAll()
  }

  
  


}
