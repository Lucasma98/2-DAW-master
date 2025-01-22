import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private cities:any[] = []
  private cityAtHome:any = {}

  constructor() { }

  addCity(newCity:any){
    if ( !this.isAlreadyInMyCities(newCity)){ //comprueba si hay una ciudad con el mismo id que ya has insertado y si no es asi la crea
      this.cities.push(newCity)
    }
  }
  deleteCity(aCity:any){ //aCity porque borras una ciudad
    this.cities = this.cities.filter( c => c.id != aCity.id)
  }

  getCities() {
    return this.cities
  }

  getCityAtHome(){
    return this.cityAtHome
  }

  setCityAtHome(aCity:any){
    this.cityAtHome = aCity
  }

  isAlreadyInMyCities(aCity:any){ //aqui comprueba el id
    return this.cities.find (c => c.id == aCity.id)
  }

}
