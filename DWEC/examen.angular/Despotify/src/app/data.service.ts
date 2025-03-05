import { Injectable } from '@angular/core';
import { DespotifyService } from './despotify.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private DespotifySrvc : DespotifyService){
    this.getDB()
    // this.song = JSON.parse(localStorage.getItem('song') || '[]')
    // this.artists = JSON.parse(localStorage.getItem('artists') || '[]')
    // this.playlists = JSON.parse(localStorage.getItem('playlists') || '[]')
    // this.CardView = JSON.parse(localStorage.getItem('CardView') || 'true')
  }

  private song:any[] = []
  private artists:any[] = []
  private playlists:any[] = []
  CardView: boolean = true; 




  saveData(){
    localStorage.setItem('song', JSON.stringify(this.song))
    localStorage.setItem('artists', JSON.stringify(this.artists))
    localStorage.setItem('playlists', JSON.stringify(this.playlists))
    localStorage.setItem('CardView', JSON.stringify(this.CardView))
  }




  getArtists(){ 
    return this.artists
  }

  getDB(){
    this.DespotifySrvc.getDB().subscribe(
     json => { 
       let db:any = json
       this.song = db.songs
       this.artists = db.artists
       if (localStorage.getItem('playlists')) 
        this.playlists = JSON.parse(localStorage.getItem('playlists') || '[]')
      else
        this.playlists = db.playlists
       //probamos a recuperar localstorage en este punto
       this.CardView = JSON.parse(localStorage.getItem('CardView') || 'true')
     }
    )
  }


  getLastOfPlaylists(){
    return this.playlists[this.playlists.length - 1]
  }
  getPlaylists(){
    return this.playlists
  }

  getSongs(){
    return this.song  
  }

  getArtistById(id: number) {
    return this.artists.find(a => a.id == id)
  }


  getTopArtist() {
    // Ordena el array de artistas según la cantidad de canciones que tienen.
    return this.artists.sort((a, b) => 
      // Cuenta cuántas canciones tiene el artista b
      this.song.filter(song => song.artist === b.id).length - 
      // Cuenta cuántas canciones tiene el artista a
      this.song.filter(song => song.artist === a.id).length) // Devuelve los artistas ordenados de mayor a menor
  }
  
  

  

}
