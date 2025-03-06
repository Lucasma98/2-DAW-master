import { Component, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-cardpeliculas',
  imports: [],
  templateUrl: './cardpeliculas.component.html',
  styles: ``
})
export class CardpeliculasComponent {
  constructor(private dataservice : DataServiceService) { }

  @Input() peliculas: any

}
