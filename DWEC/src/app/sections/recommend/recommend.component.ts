import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CardPeliculaComponent } from '../card-pelicula/card-pelicula.component';

@Component({
  selector: 'app-recommend',
  imports: [CardPeliculaComponent],
  templateUrl: './recommend.component.html',
  styles: ``
})
export class RecommendComponent {

constructor(private data: DataService) { 
}

 getUsuarios(){
   return this.data.getUsuarios()
 }

 getDatosPeliculas(nombre: string){ 
  this.data.getDatosPeliculas(nombre)
 }

 getPeliculas(){
    return this.data.getPeliculas()
 }

 getPeliculaId(id: string){
  this.data.getDatosPelicula(id)
 }

 getPelicula(){
    return this.data.getPelicula()
 }  

 setPelicula(pelicula:any){
   this.data.setPelicula(pelicula)
 }

 getUsuarioRecomendante(){
    return this.data.getUsuarioRecomendante()
  }

  getUsuarioRecomendado(){
    return this.data.getUsuarioRecomendado()
  }

  setUsuarioRecomendado(usuario: any){
    this.data.setUsuarioRecomendado(usuario)
  }

  onUsuarioSelect(value: any) {
    let selectedUser = this.getUsuarios().find(user => user.id == value);
    if (selectedUser) {
    this.data.setUsuarioRecomendado(selectedUser);
    }
    else{
      this.data.setUsuarioRecomendado({id: 0 , name: "No se ha seleccionado un usuario"});
    }
    console.log(this.data.getUsuarioRecomendado())
  }

  addRecomendacion(){
    this.data.addRecomendacion()
  }


}
