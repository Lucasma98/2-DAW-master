import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private cities:any[] = []

  constructor() { }

  addCity(newCity:any){
    if ( !this.isAlreadyInMyCities(newCity)){ //comprueba si hay una ciudad con el mismo id que ya has insertado y si no es asi la crea
      this.cities.push(newCity)
    }
  }

  getCities() {
    return this.cities
  }

  isAlreadyInMyCities(aCity:any){ //aqui comprueba el id
    return this.cities.find (c => c.id == aCity.id)
  }


}
