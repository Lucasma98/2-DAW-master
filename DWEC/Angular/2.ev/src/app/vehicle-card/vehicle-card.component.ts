import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-vehicle-card',
  imports: [],
  templateUrl: './vehicle-card.component.html',
  styles: ``
})
export class VehicleCardComponent {
  @Input() vehicle:any; //importar cada vehiculo para cada tarjeta
}
