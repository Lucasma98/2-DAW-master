import { Component } from '@angular/core';
import { DataServiceService } from '../../data-service.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styles: `
div.row { margin-top: 1cm;}
`
})
export class ProfileComponent {
  constructor(private dataService: DataServiceService) { }

  getusuarios() {
    return this.dataService.getusuarios();
  }
}


