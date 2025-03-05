import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private api: ApiService) {
    this.getUsuariosdeApi();
    this.datos = JSON.parse(localStorage.getItem('datos') || '[]')
  }

  private usuarios: any[] = [];
  private peliculas: any[] = [];
  private pelicula: any;
  private datos: any[] = [];

  //lista de usuarios
  getUsuariosdeApi() {
    this.api.getUsers().subscribe(json => {
        let datos: any = json;
        this.usuarios = datos;
      });
  }
  getusuarios() {
    return this.usuarios;
  }
//buscar peliculas por nombre
  searchbyName(name: string) {
    this.api.getfilmsByTitle(name).subscribe(json => {
      let data: any = json;
      this.peliculas = data.Search;
    });
  }
  getdatosjson() {
    return this.peliculas;
  }

  //clicar en pelicula
  getPelicula(){
    return this.pelicula
  }
  setPelicula(pelicula: any) {
    this.pelicula = pelicula;
  }

  //localstorage
  getdatos() {
    return this.datos;
  }

}

