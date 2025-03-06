import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListadoFavoritosComponent } from './components/listado-favoritos/listado-favoritos.component';
import { BuscadorConsultasComponent } from './components/buscador-consultas/buscador-consultas.component';
import { AgradecimientosComponent } from './components/agradecimientos/agradecimientos.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';

const routes: Routes = [
  { path: 'home', component: InicioComponent },
  { path: 'favs', component: ListadoFavoritosComponent },
  { path: 'query', component: BuscadorConsultasComponent },
  { path: 'thank', component: AgradecimientosComponent },
  { path: 'detail/:id', component: DetallesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Pagina404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
