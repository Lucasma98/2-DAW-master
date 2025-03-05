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
  usuarioSeleccionado(value: any) {
    const usuarioseleccionado = this.getusuarios().find(usuario => usuario.id == value);
    if{(usuarioseleccionado) {
      this.dataService.setusrecomendado(usuarioseleccionado);
    }
    else{
      this.dataService.setusrecomendado({id: 0 , name: "No se ha seleccionado un usuario"});
    }
    }
  }
}


