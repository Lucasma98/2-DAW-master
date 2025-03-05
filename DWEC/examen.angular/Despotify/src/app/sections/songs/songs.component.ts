import { Component } from '@angular/core';
import { SongCardComponent } from "./song-card/song-card.component";
import { SongRowComponent } from "./song-row/song-row.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DespotifyService } from '../../despotify.service';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-songs',
  imports: [SongCardComponent, SongRowComponent, FormsModule , CommonModule],
  templateUrl: './songs.component.html',
  styles: ``
})
export class SongsComponent {

  constructor(  private DataSrvc : DataService){
   this.CardView = this.getCardViewValue()
  }

  CardView: boolean 

  pattern: string = ""

  getCardViewValue(){
    return this.DataSrvc.CardView
  }



 getSongsByPattern() {
    return this.getSongs().filter(s => 
      s.title.toLowerCase().includes(this.pattern.toLowerCase()) || this.getArtistById(s.artist).name.toLowerCase().includes(this.pattern.toLowerCase())
    );
  }

  UpdatePattern(pattern: string){
    this.pattern = pattern
  }

  getSongs() {
    return this.DataSrvc.getSongs()
  }
  
  getArtists(){
    return this.DataSrvc.getArtists()
  }

  getArtistById(id: number) {
    return this.DataSrvc.getArtistById(id)
  }
}

