import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-menu.component.html',
  styles:`div,nav {
    background-color: rgb(222, 213, 203);
  }
  .container-fluid {
    margin-left: 1cm;
  }`
})
export class NavMenuComponent {

   
}
