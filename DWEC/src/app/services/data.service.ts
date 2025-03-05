import { Injectable } from '@angular/core';
import { ApisService } from './apis.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private api: ApisService) {
    this.getUsuariosApi();
  }

  private usuarios: any[] = [];
  private peliculas: any[] = [];
  private pelicula: any;
  private usuarioRecomendante: any = { id: 0, name: "No se ha seleccionado un usuario" };
  private usuarioRecomendado: any = { id: 0, name: "No se ha seleccionado un usuario" };
  private recomendaciones: any[] = [];

  getUsuariosApi() {
    this.api.getUsuarios().subscribe(
      json => {
        let datos: any = json;
        this.usuarios = datos;
      });
  }

  getUsuarios() {
    return this.usuarios;
  }

  getDatosPeliculas(nombre: string) {
    this.api.getDatosPeliculas(nombre).subscribe(
      json => {
        let datos: any = json;
        this.peliculas = datos.Search;
      });
  }

  getDatosPelicula(id: string) {
    this.api.getDatosPeliculas(id).subscribe(
      json => {
        let datos: any = json;
        this.pelicula = datos;
      });
  }

  getPeliculas() {
    return this.peliculas;
  }

  getPelicula() {
    return this.pelicula;
  }

  setPelicula(pelicula: any) {
    this.pelicula = pelicula;
  }

  setSelectedUsuarioRecomendante(usuario: any) {
    this.usuarioRecomendante = usuario;
  }

  getUsuarioRecomendante() {
    return this.usuarioRecomendante;
  }

  setUsuarioRecomendado(usuario: any) {
    this.usuarioRecomendado = usuario;
  }

  getUsuarioRecomendado() {
    return this.usuarioRecomendado;
  }

  addRecomendacion() {
    this.recomendaciones.push({
      usuarioRecomendante: this.usuarioRecomendante,
      usuarioRecomendado: this.usuarioRecomendado,
      pelicula: this.pelicula,
    });
    console.log(this.recomendaciones);
  }


  deleteRecomendacion(){
    
  }

  getRecomendacionFromUser() {
    return this.recomendaciones.filter(recomendacion => recomendacion.usuarioRecomendante.id === this.usuarioRecomendante.id);
  }

  getRecomendacionToUser() {
    return this.recomendaciones.filter(recomendacion => recomendacion.usuarioRecomendado.id === this.usuarioRecomendante.id);
  }
}
