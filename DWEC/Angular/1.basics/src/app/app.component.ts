import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private title = 'Proyecto 1.basics';
  language = "es" 
  fruits = ["naranja","mandarina","kaki","granada"]

  getTitle() {
    return this.title
  }
}
