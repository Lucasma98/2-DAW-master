import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseDatosCineService } from '../../services/base-datos-cine.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styles: ``
})
export class DetallesComponent implements OnInit {
  pelicula: any;

  constructor(
    private route: ActivatedRoute,
    private baseDatosCineService: BaseDatosCineService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.baseDatosCineService.obtenerDetalles(id).subscribe(data => {
        this.pelicula = data;
      });
    }
  }

  volver(): void {
    // Redirige a favoritos
  }
}
