import { Component } from '@angular/core';
import { ManufacturerCardComponent } from "../manufacturer-card/manufacturer-card.component";

@Component({
  selector: 'app-manufacturer-card-list',
  imports: [ManufacturerCardComponent],
  templateUrl: './manufacturer-card-list.component.html',
  styles: ``
})
export class ManufacturerCardListComponent {
  private manufacturer = [
      {"id":"1","name":"Audi"},
      {"id":"2","name":"BMW"},
      {"id":"3","name":"Citroen"},
      {"id":"4","name":"Ford"},
      {"id":"5","name":"Honda"},
      {"id":"6","name":"Hyundai"},
      {"id":"7","name":"Jaguar"},
      {"id":"8","name":"Kia"},
      {"id":"9","name":"Lexus"},
      {"id":"10","name":"Mercedes"},
      {"id":"11","name":"Mitsubishi"},
      {"id":"12","name":"Nissan"},
      {"id":"13","name":"Peugeot"},
      {"id":"14","name":"Porsche"},
      {"id":"15","name":"Renault"},
      {"id":"16","name":"Suzuki"},
      {"id":"17","name":"Tesla"},
      {"id":"18","name":"Toyota"},
      {"id":"19","name":"Volvo"},
      {"id":"20","name":"Volkswagen"}
  ]
  getmanufacturer(){
    return this.manufacturer
  }
}
