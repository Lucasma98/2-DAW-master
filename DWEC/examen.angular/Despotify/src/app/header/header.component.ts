import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styles: `#logo,#titulo {
    background-color: rgb(240, 240, 240);
    align-content: left;
  }
  #titulo>h1 {
    font-size: 72px;
    text-align: left;
  }`
})
export class HeaderComponent {

}
