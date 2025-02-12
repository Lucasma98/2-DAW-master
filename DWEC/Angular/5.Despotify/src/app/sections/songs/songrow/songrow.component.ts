import { Component,Input } from '@angular/core';
import { DuracionPipe } from '../../../duracion.pipe';

@Component({
  selector: 'app-songrow',
  imports: [DuracionPipe],
  templateUrl: './songrow.component.html',
  styles: ``
})
export class SongrowComponent {

  @Input() cancion: any;
  @Input() artistas: any;
}
