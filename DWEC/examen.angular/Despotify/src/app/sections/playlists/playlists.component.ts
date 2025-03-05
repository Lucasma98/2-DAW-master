import { Component } from '@angular/core';
import { PlaylistBlockComponent } from "./playlist-block/playlist-block.component";
import { DataService } from '../../data.service';

@Component({
  selector: 'app-playlists',
  imports: [PlaylistBlockComponent],
  templateUrl: './playlists.component.html',
  styles: ``
})
export class PlaylistsComponent {


  constructor( private DataSrvc : DataService){

  

  }

  getPlaylists() {
    return this.DataSrvc.getPlaylists()
  }

}
