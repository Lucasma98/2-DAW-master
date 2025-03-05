import { Routes } from '@angular/router';
import { InicioComponent } from './sections/inicio/inicio.component';
import { BuscadorComponent } from './sections/buscador/buscador.component';
import { CarritoComponent } from './sections/carrito/carrito.component';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [
    { path: "", redirectTo: "inicio", pathMatch: "full" },
    { path: "inicio", component: InicioComponent },
    { path: "buscador", component: BuscadorComponent },
    { path: "carrito", component: CarritoComponent },
    { path: "**", component: Page404Component }
];
