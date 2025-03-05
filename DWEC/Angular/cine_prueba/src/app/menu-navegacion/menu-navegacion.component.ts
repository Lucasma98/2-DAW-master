import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-navegacion',
  imports: [],
  templateUrl: './menu-navegacion.component.html',
  styles: `nav ul {
    list-style: none;
    display: flex;
    gap: 10px;
    padding: 0;
  }
  nav a {
    text-decoration: none;
    color: black;
  }
  `
})
export class MenuNavegacionComponent {

}
