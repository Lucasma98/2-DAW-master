import { Component } from '@angular/core';
import { AccesoDatosService } from '../acceso-datos.service';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-search-section',
  imports: [],
  templateUrl: './search-section.component.html',
  styles: ``
})
export class SearchSectionComponent {
  
  private results:any

  constructor(private apiSrvc:AccesoDatosService,
              private citiesSrvc:CitiesService) {}

addCity(newCity:any){
  this.citiesSrvc.addCity(newCity)
}

  isAlreadyInCities(aCity:any){
    return this.citiesSrvc.isAlreadyInMyCities(aCity) //se le pone return, porque esta esperando un true o un false
  }

  getResults(){
    return this.results
  }

  searchByName(pattern:string) {
    //pedir datos al servidor
    this.apiSrvc.searchByName(pattern).subscribe(
      json => {
        let response:any = json
        this.results = response.list
      }
    )
    //cuando lleguen los guardamos en "results"

  }

  

}
