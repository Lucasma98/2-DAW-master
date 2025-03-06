import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private urlBase= "https://jsonplaceholder.typicode.com/users";

  private urlBase2= "https://omdbapi.com/?apikey=bbc3c930&";

  private urlBase3= "https://omdbapi.com/?apikey=bbc3c930&";

  getUsers() {
    return this.http.get(this.urlBase);
  }

  getfilmsByTitle(title: string) {
    return this.http.get(this.urlBase2 + "s=" + title );
  }

  getfilmsById(id: string) {
    return this.http.get(this.urlBase3 + "i=" + id);
  }

}
