import { Injectable   } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DespotifyService {

  constructor(private http: HttpClient) { }


  private urlBase = "https://my-json-server.typicode.com/luismiguel-fernandez/examen"

  private songSuffix = "/songs"

  private artistSuffix = "/artists"

  private dbSuffix = "/db"


  getSongs(){
    return this.http.get(this.urlBase + this.songSuffix)
  }
  

  getArtists(){
    return this.http.get(this.urlBase + this.artistSuffix)
  }

  getDB(){
    return this.http.get(this.urlBase + this.dbSuffix)
  }


  

}
