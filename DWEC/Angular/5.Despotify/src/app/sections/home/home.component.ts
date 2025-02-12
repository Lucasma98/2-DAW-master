import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

  private ordenarArray : any[] = []

  constructor(private DataService : DataService){
    
  }

  getsongLenght(){
    return this.DataService.getcanciones().length
  }

  getArtistLenght(){
    return this.DataService.getartistas().length 
  }

  gettopsongLenght(){
    this.ordenarArray = this.DataService.getcanciones() //ordenar el array y coger el titulo con la mayor duracion de la cancion. Restamos b - a porque su resultado sale positivo, ordena de mayor a menor y si(a.length - b.length sale un valor negativo y estaria ordenando de menor a mayor)

    return this.ordenarArray.sort((a,b) => b.length - a.length)[0].title
    
    
  }
  

}

  
