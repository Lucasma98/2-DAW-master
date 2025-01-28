import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private cities:any[] = []
  private cityAtHome:any = {}

  constructor() {
    this.cities = JSON.parse(localStorage.getItem("cities") || "[]")//si hay una ciudad la recupera, la parsea y la guarda en la variable cities y si no hay ninguna, se guarda un null
    this.cityAtHome = JSON.parse(localStorage.getItem("cityAtHome") || "{}")
  }

  addCity(newCity:any){
    if ( !this.isAlreadyInMyCities(newCity)){ //comprueba si hay una ciudad con el mismo id que ya has insertado y si no es asi la crea
      this.cities.push(newCity)
      this.saveAll()
    }
  }
  deleteCity(aCity:any){ //aCity porque borras una ciudad
    this.cities = this.cities.filter( c => c.id != aCity.id)
    this.saveAll()
  }

  getCities() {
    return this.cities
  }

  getCityAtHome(){
    return this.cityAtHome
  }

  setCityAtHome(aCity:any){
    this.cityAtHome = aCity
    this.saveAll()
  }

  updateCity(updateCity:any){
    let position = this.cities.findIndex(c => c.id == updateCity.id)
    this.cities[position] = updateCity
  }

  isAlreadyInMyCities(aCity:any){ //aqui comprueba el id
    return this.cities.find (c => c.id == aCity.id)
    
  }

  saveAll(){
    localStorage.setItem("cities",JSON.stringify(this.cities))
    localStorage.setItem("cityAtHome",JSON.stringify(this.cityAtHome))
  }
}
