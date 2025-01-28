import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccesoDatosService {

/*
Buscar por patrón
https://api.openweathermap.org/data/2.5/find?q=murcia&appid=0617ecda468c5e9492d75f4388b1ddf5
Consultar el tiempo de un ID concreto
https://api.openweathermap.org/data/2.5/weather?
	id=6355234
	&
	appid=0617ecda468c5e9492d75f4388b1ddf5
	&
	units=metric
*/

  private urlBase = "https://api.openweathermap.org/data/2.5/"
  private urlSufix = "&appid=0617ecda468c5e9492d75f4388b1ddf5&units=metric"

  constructor(private http:HttpClient) { }

  // updateAllMyCities(){

  // }
  
  updateById(id:number){
    return this.http.get(this.urlBase + "weather?id=" + id + this.urlSufix)
  }


  searchByName(pattern:string){
	return this.http.get(this.urlBase + "find?q=" + pattern + this.urlSufix)
  }
}
