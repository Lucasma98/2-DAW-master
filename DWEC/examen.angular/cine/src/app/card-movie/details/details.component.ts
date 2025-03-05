import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BaseDatosCineService } from '../../services/base-datos-cine.service';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styles: ``
})

  export class DetailsComponent implements OnInit {

    peli:any
    peliID:any
  
    constructor(private router:ActivatedRoute,
                private dataSrvc:BaseDatosCineService
    ) { }
  
  
    ngOnInit(): void {
        this.peliID = this.router.snapshot.paramMap.get("id") 
        this.dataSrvc.getMovieById(this.peliID).subscribe(
          json=> {
            let peli = json
            this.peli = peli
          }
        )
    }
  
  }
