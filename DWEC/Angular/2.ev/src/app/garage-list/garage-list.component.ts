import { Component } from '@angular/core';
import { VehicleCardComponent } from '../vehicle-card/vehicle-card.component';
import { GarageService } from '../garage.service';

@Component({
  selector: 'app-garage-list',
  imports: [VehicleCardComponent],//importamos
  templateUrl: './garage-list.component.html',
  styles: ``
})
export class GarageListComponent {
  constructor(private GarageSvrc:GarageService){}

  getMyVehicles(){
    return this.GarageSvrc.getMyVehicles()
  }
}
