import { Component } from '@angular/core';

@Component({
  selector: 'app-pie',
  imports: [],
  templateUrl: './pie.component.html',
  styles: `#pie {
    background-color: rgb(218, 255, 235);
    padding: 10px;
    text-align: center;
  }`
})
export class PieComponent {
  autor = 'Lucas Martinez Zambudio'; // Reemplaza con tu nombre
}
