import { Component } from '@angular/core';
import { CityCardComponent } from '../city-card/city-card.component';
import { CitiesService } from '../cities.service';
import { AccesoDatosService } from '../acceso-datos.service';

@Component({
  selector: 'app-manage-section',
  imports: [CityCardComponent],
  templateUrl: './manage-section.component.html',
  styles: ``
})
export class ManageSectionComponent {


  constructor(private citiesSrvc:CitiesService,
              private http:AccesoDatosService){
    // console.log("contructor del componente Manage Sections")
    //actualizar los valores de mis ciudades favoritas
    //recorrer mis ciudades y por cada una de ellas voy a llama al servidor para recibir info actual
    this.citiesSrvc.getCities().forEach(c => {
      //Consulta al servidor para preguntar por la ciudad "c"
      this.http.updateById(c.id).subscribe(
        json => {
          console.log("recibimos una ciudad actualizada")
          let response:any = json
          //ete nuevo y actualizado "response" debe sustituir a mi ciudad obsoleta
          this.citiesSrvc.updateCity(json)
        }
      )
    })
  }


  getCities(){
    return this.citiesSrvc.getCities()
  }
}
