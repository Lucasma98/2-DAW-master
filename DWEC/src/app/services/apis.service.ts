import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http: HttpClient) { }

  private usuariosUrl = "https://jsonplaceholder.typicode.com/users"
  private peliculasUrl ="https://omdbapi.com/?apikey=f2ac963e&s="
  private peliculaByIdUrl = "https://omdbapi.com/?apikey=f2ac963e&i="


  getUsuarios(){
    return this.http.get(this.usuariosUrl)
  }

  getDatosPeliculas(nombre: string) {
    return this.http.get(this.peliculasUrl + nombre);
  }

  getPeliculaById(id: string) {
    return this.http.get(this.peliculaByIdUrl + id);
  }

}
