//necesitas conectar el html del city-at-home(la carta) con el de manage, a traves del servicio cities.service
import { Component } from '@angular/core';
import { CitiesService } from '../cities.service';
import { TempPipe } from '../temp.pipe';
import { CountryCodePipe } from '../country-code.pipe';

@Component({
  selector: 'app-city-at-home',
  imports: [TempPipe,CountryCodePipe],
  templateUrl: './city-at-home.component.html',
  styles: ``
})
export class CityAtHomeComponent {
  constructor (private citiesSrvc:CitiesService){

  }
  getCityAtHome(){
    return this.citiesSrvc.getCityAtHome()
  }
}
