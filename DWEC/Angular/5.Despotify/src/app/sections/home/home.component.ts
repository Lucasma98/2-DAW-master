import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

  private arraycopia: any[] = []
  private arraymix: any[] = []


  constructor(private DataService : DataService){

  }

  getsongLenght(){
    return this.DataService.getcanciones().length
  }

  getArtistLenght(){
    return this.DataService.getartistas().length
  }

  gettopsongLenght(){
    this.arraycopia = JSON.parse(JSON.stringify(this.DataService.getcanciones()))
    //ordenar el array y coger el titulo con la mayor duracion de la cancion. Restamos b - a porque su resultado sale positivo, ordena de mayor a menor y si(a.length - b.length sale un valor negativo y estaria ordenando de menor a mayor)
    return this.arraycopia.sort((a,b) => b.length - a.length)[0].title

  }


  getArtistSongs(){
    this.arraycopia = this.DataService.getartistas()

    //ornder el array
    return this.arraycopia.sort((a,b)=>
    //Cuenta cuantas canciones tiene el artista b
    this.DataService.getcanciones().filter(cancion => cancion.artist === b.id).length -
    //Cuenta cuantas canciones tiene el artista a
    this.DataService.getcanciones().filter(cancion => cancion.artist === a.id).length);
    //Ponemos primero b y despues a, ya que queremos que ordene de mayor a menor
  }


  getArrayCopia()
  {}

}


