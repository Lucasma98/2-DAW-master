import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],//tienes que importar las librerias que usaras para luego cuando pulses la palabra, te redirica a otra cosa
  templateUrl: './nav-bar.component.html',
  styles: ``
})
export class NavBarComponent {

}
