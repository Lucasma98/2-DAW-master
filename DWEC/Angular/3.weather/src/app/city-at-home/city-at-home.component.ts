//necesitas conectar el html del city-at-home(la carta) con el de manage, a traves del servicio cities.service
import { Component } from '@angular/core';
import { CitiesService } from '../cities.service';
import { TempPipe } from '../temp.pipe';
import { CountryCodePipe } from '../country-code.pipe';
import { AccesoDatosService } from '../acceso-datos.service';

@Component({
  selector: 'app-city-at-home',
  imports: [TempPipe,CountryCodePipe],
  templateUrl: './city-at-home.component.html',
  styles: ``
})
export class CityAtHomeComponent {
  constructor (private citiesSrvc:CitiesService,
                private http:AccesoDatosService){
  this.http.updateById(this.citiesSrvc.getCityAtHome().id).subscribe(
    json =>{
      this.citiesSrvc.setCityAtHome(json)
    }
  )

  }
  getCityAtHome(){
    return this.citiesSrvc.getCityAtHome()
  }
}
