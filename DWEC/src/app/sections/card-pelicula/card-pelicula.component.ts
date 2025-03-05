import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pelicula',
  imports: [],
  templateUrl: './card-pelicula.component.html',
  styles: ``
})
export class CardPeliculaComponent {

  @Input() pelicula:any

}
