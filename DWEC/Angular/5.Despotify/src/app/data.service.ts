import { Injectable } from '@angular/core';
import { DespotifyService } from './despotify.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private despotifyServicie: DespotifyService) {
    this.getSongsService()
    this.getArtistsService()
  }

  private canciones:any[] = []
  private artistas:any[] = []

  getcanciones() {
    return this.canciones
  }
  getartistas() {
    return this.artistas
  }

  getSongsService() {
    this.despotifyServicie.getSongs().subscribe(json => {
      let cancion : any = json
      this.canciones = cancion
    })
  }

  getArtistsService() {
    this.despotifyServicie.getArtists().subscribe(json => {
      let artista : any = json
      this.artistas = artista
    })
  }

}
