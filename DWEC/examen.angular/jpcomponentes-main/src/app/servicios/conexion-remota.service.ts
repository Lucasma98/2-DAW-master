import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConexionRemotaService {

  constructor(private http: HttpClient) { }

  private apiBase = "https://my-json-server.typicode.com/luismiguel-fernandez/angular2022/";

  getArticulosData() {
    return this.http.get(this.apiBase + "articulos");
  }

  getCategoriaData() {
    return this.http.get(this.apiBase + "categorias");
  }

  getFabricantesData() {
    return this.http.get(this.apiBase + "fabricantes");
  }
}
