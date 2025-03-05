import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-block',
  imports: [],
  templateUrl: './playlist-block.component.html',
  styles: ``
})
export class PlaylistBlockComponent {


@Input() playlist: any;


}
