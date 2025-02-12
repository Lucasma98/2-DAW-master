import { Component,Input } from '@angular/core';
import { DuracionPipe } from '../../../duracion.pipe';

@Component({
  selector: 'app-songcard',
  imports: [DuracionPipe],
  templateUrl: './songcard.component.html',
  styles: ``
})
export class SongcardComponent {
  @Input() cancion: any;
  @Input() artistas: any;
}
