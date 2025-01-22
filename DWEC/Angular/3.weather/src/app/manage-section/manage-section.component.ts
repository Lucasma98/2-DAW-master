import { Component } from '@angular/core';
import { CityCardComponent } from '../city-card/city-card.component';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-manage-section',
  imports: [CityCardComponent],
  templateUrl: './manage-section.component.html',
  styles: ``
})
export class ManageSectionComponent {


  constructor(private citiesSrvc:CitiesService){}


  getCities(){
    return this.citiesSrvc.getCities()
  }
}
