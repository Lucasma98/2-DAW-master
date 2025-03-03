import { Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { FavsComponent } from './sections/favs/favs.component';
import { SearchComponent } from './sections/search/search.component';
import { CongratsComponent } from './sections/congrats/congrats.component';
import { Page404Component } from './page404/page404.component';
import { DetailsComponent } from './sections/card-movie/details/details.component';

export const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{path: 'home', component: HomeComponent },
{path: 'favs', component: FavsComponent },
{path: 'details/:Title', component: DetailsComponent },
{path: 'search', component: SearchComponent },
{ path: 'congrats', component: CongratsComponent },
{ path: "**", component: Page404Component }
];
