import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

  constructor( private dataSrvc : DataService){}


  CountTotalSongs(){
    return this.dataSrvc.getSongs().length
  }

 CountTotalArtists(){
    return this.dataSrvc.getArtists().length
 }

 GetTopSongByLength(){
   let arraycopia: any[] = JSON.parse(JSON.stringify(this.dataSrvc.getSongs()))
   return arraycopia.sort((a,b) => b.length - a.length)[0].title
 }

 GetTopArtistBySongs(){

  return this.dataSrvc.getTopArtist()

 }

 CountTotalPlaylists(){

   return this.dataSrvc.getPlaylists().length
   
 }


 GetTotalSongsByArtist(id: number){
   return this.dataSrvc.getSongs().filter(s => s.artist === id).length
 }

 GetAverageSongsInPlaylists(){
  
  return this.dataSrvc.getPlaylists().reduce((a,b) => a + b.songs.length, 0)

 }

}
