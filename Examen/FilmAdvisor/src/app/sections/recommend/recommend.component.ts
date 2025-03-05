import { Component } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import { CardpeliculasComponent } from '../../cardpeliculas/cardpeliculas.component';

@Component({
  selector: 'app-recommend',
  imports: [CardpeliculasComponent],
  templateUrl: './recommend.component.html',
  styles: `
div.row { margin-top: 0.5cm; }
`
})
export class RecommendComponent {
   constructor(private dataService: DataServiceService) { }

    getusuarios() {
      return this.dataService.getusuarios();
    }

    searchbyName(name: string) {
      this.dataService.searchbyName(name);
    }

    getdatosjson() {
      return this.dataService.getdatosjson();
    }

    getPelicula(){
      return this.dataService.getPelicula()
   }
    setPelicula(pelicula: any) {
      this.dataService.setPelicula(pelicula);
    }

}
