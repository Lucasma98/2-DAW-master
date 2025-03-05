import { Component , Input } from '@angular/core';
import { DuracionPipe } from '../../../duracion.pipe';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-song-row',
  imports: [DuracionPipe],
  templateUrl: './song-row.component.html',
  styles: ``
})
export class SongRowComponent {


  constructor( private dataSrvc: DataService){}

@Input() song: any;
@Input() artista: any;


AddToPlaylist(){

  this.dataSrvc.getLastOfPlaylists().songs.push(this.song.id)
  this.dataSrvc.saveData()
}


RemoveFromPlaylist(){
  this.dataSrvc.getLastOfPlaylists().songs.splice(this.dataSrvc.getLastOfPlaylists().songs.indexOf(this.song.id), 1)
  this.dataSrvc.saveData()
}

isAlredyInPlaylist(){

  let playlists = this.dataSrvc.getLastOfPlaylists()

  if(playlists.songs.includes(this.song.id)){
    return true
  }
  else{
    return false
  }

}

}
