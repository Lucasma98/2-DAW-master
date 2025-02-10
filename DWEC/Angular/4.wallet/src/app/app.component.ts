import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FootComponent } from './foot/foot.component';
import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FootComponent , HeaderComponent , NavMenuComponent],
  templateUrl: './app.component.html',
  styles: ` `
})
export class AppComponent {



  
}
