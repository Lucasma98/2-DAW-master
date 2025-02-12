import { Component } from '@angular/core';
import { SongcardComponent } from './songcard/songcard.component';
import { SongrowComponent } from './songrow/songrow.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-songs',
  imports: [SongcardComponent, SongrowComponent,FormsModule, CommonModule],
  templateUrl: './songs.component.html',
  styles: ``
})
export class SongsComponent {

  constructor(private dataSrvc : DataService) { } //llamar al servicio -- todo lo que este dentro del constructor, son como valores fijos que al ejecutarse el componente se ejecutaran
  
  CardView:boolean = true;
  pattern: string = "";

  getcanciones() {
    return this.dataSrvc.getcanciones() //llamar los metodos del servicio
  }

  getartistas() {
    return this.dataSrvc.getartistas()  //llamar los metodos del servicio
  }

  getBuscadorCanciones() {
    return this.getcanciones().filter(cancion => 
      cancion.title.toLowerCase().includes(this.pattern.toLowerCase()) ||
      this.getArtistById(cancion.artist).name.toLowerCase().includes(this.pattern.toLowerCase())
    );
  } 

  
  

  getArtistById(id: number) {
    return this.getartistas().find(artist => artist.id == id)
  }

  


}

