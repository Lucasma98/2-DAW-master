import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styles: `div.row { margin-top: 1cm; }`
})
export class ProfileComponent {

  constructor(private data: DataService) { }

  getUsuarios() {
    return this.data.getUsuarios();
  }

  onUsuarioSelect(value: any) {
    const selectedUser = this.getUsuarios().find(user => user.id == value);
    if (selectedUser) {
      this.data.setSelectedUsuarioRecomendante(selectedUser);
    } else {
      this.data.setSelectedUsuarioRecomendante({ id: 0, name: "No se ha seleccionado un usuario" });
    }
    console.log(this.data.getUsuarioRecomendante());
  }

  getRecomendacionToUser() {
    return this.data.getRecomendacionToUser();
  }

  getRecomendacionFromUser() {
    return this.data.getRecomendacionFromUser();
  }

  deleteRecomendacion()
  {
    this.data.deleteRecomendacion();
  }
}
