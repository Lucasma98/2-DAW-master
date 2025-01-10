import { Component } from '@angular/core';
import { GarageService } from '../garage.service';
import { GarageListComponent } from "../garage-list/garage-list.component";

@Component({
  selector: 'app-garage-section',
  imports: [GarageListComponent],
  templateUrl: './garage-section.component.html',
  styles: ``
})
export class GarageSectionComponent {
 
}
