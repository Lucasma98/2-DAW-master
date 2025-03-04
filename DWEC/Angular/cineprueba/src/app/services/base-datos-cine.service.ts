import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosCineService {

  constructor(private http: HttpClient) { 
  }

  private urlBase= "https://www.omdbapi.com/?apikey=bbc3c930&";
  

  getMoviesByTitle(title: string) {
    return this.http.get(this.urlBase +  "s=" + title );
  }

  getMovieById(id: string) {
    return this.http.get(this.urlBase + "i=" + id);
  }


}
