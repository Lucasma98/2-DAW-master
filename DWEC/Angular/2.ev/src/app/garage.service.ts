// se crea un service para que dos componentes interactuen entre ellos.
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GarageService {
  private myVehicles:any[] = []

  constructor() { }
  
  addToMyVehicles(vehicle:any){
      this.myVehicles.push(vehicle)
  }//guardar los vehicles
  getMyVehicles(){
    return this.myVehicles
  }//recuperar los vehicles
}

