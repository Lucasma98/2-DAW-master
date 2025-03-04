import { Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { FavoriteComponent } from './sections/favorite/favorite.component';
import { SearchComponent } from './sections/search/search.component';
import { CongratulationsComponent } from './sections/congratulations/congratulations.component';
import { Page404Component } from './page404/page404.component';
import { DetailsComponent } from './card-movie/details/details.component';

export const routes: Routes = [

    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'favorites', component: FavoriteComponent},
    {path: 'details/:id', component: DetailsComponent},
    {path: 'search', component: SearchComponent},
    {path: 'congratulations', component: CongratulationsComponent},
    {path: '**', component: Page404Component},

];
