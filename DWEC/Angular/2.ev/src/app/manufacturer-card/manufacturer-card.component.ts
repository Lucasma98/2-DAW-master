import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-manufacturer-card',
  imports: [],
  templateUrl: './manufacturer-card.component.html',
  styles: ``
})
export class ManufacturerCardComponent {
  @Input() manufacturer:any;
}
