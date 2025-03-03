import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseDeDatosService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://www.omdbapi.com/?apikey=b7fd0c84&s=';

  searchMovies(pattern: string) {
    return this.http.get(this.baseUrl + pattern);
  }
}
