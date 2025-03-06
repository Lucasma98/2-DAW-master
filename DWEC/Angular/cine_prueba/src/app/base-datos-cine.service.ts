import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosCineService {
  private apiUrl = 'https://www.omdbapi.com/';
  private apiKey = 'bbc3c930'; // Reemplaza con tu clave API

  constructor(private http: HttpClient) {}

  buscarPeliculas(titulo: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?s=${titulo}&apikey=${this.apiKey}`);
  }

  obtenerDetalles(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?i=${id}&apikey=${this.apiKey}`);
  }
}
