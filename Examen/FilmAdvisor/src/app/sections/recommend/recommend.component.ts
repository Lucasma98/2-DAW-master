import { Component } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import { CardpeliculasComponent } from '../../cardpeliculas/cardpeliculas.component';

@Component({
  selector: 'app-recommend',
  imports: [CardpeliculasComponent],
  templateUrl: './recommend.component.html',
  styles: `
div.row { margin-top: 0.5cm; }
`
})
export class RecommendComponent {
   constructor(private dataService: DataServiceService) { }

    getusuarios() {
      return this.dataService.getusuarios();
    }

    searchbyName(name: string) {
      this.dataService.searchbyName(name);
    }

    getdatosjson() {
      return this.dataService.getdatosjson();
    }

    getPelicula(){
      return this.dataService.getPelicula()
   }
    setPelicula(pelicula: any) {
      this.dataService.setPelicula(pelicula);
    }

    getusrecomendado(){
      return this.dataService.getusrecomendado();
    }
    setusrecomendado(usuario: any) {
      this.dataService.setusrecomendado(usuario);
    }

    usuarioSeleccionado(value: any) {
      const usuarioseleccionado = this.getusuarios().find(usuario => usuario.id == value);
      if(usuarioseleccionado) {
        this.dataService.setusrecomendado(usuarioseleccionado);
      }
      else{
        this.dataService.setusrecomendado({id: 0 , name: "No se ha seleccionado un usuario"});
      }
      }
    }
    addRecomendacion(){
      this.dataService.addRecomendacion()
    }

