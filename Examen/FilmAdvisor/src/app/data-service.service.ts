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
  private usrecomendado: any = {id: 0 , name: "No se ha seleccionado un usuario"};
  private usuario_recomiendo: any = {id: 0 , name: "No se ha seleccionado un usuario"};
  private recomendaciones: any[] = [];

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

  //mostrar al usuario
  getusrecomendado(){
    return this.usrecomendado;
  }
  setusrecomendado(usuario: any){
    this.usrecomendado = usuario;
  }

  //mostrar al usuario que recomienda
  getusuario_recomiendo(){
    return this.usuario_recomiendo;
  }
  setusuario_recomiendo(usuario: any){
    this.usuario_recomiendo = usuario;
  }
  addRecomendacion(recomendacion: any){
    this.recomendaciones.push({
      usrecomendado: this.usrecomendado,
      usuario_recomiendo: this.usuario_recomiendo,
      pelicula: this.pelicula
    });
    console.log(this.recomendaciones);
  }

  getRecomendacionFromUser() {
    console.log(this.recomendaciones);
    console.log(this.usrecomendado);
    return this.recomendaciones.filter(recomendacion => recomendacion.usrecomendado.id === this.usrecomendado.id);
  }

  getRecomendacionToUser() {
    console.log(this.recomendaciones);
    console.log(this.usrecomendado)
    return this.recomendaciones.filter(recomendacion => recomendacion.usuario_recomiendo.id === this.usrecomendado.id);
  }




  //localstorage
  getdatos() {
    return this.datos;
  }
  saveAll(){
    localStorage.setItem('datos', JSON.stringify(this.datos))
  }
}

