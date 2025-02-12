import { Routes } from '@angular/router';
import { PlaylistsComponent } from './sections/playlists/playlists.component';
import { SongsComponent } from './sections/songs/songs.component';
import { HomeComponent } from './sections/home/home.component';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [

    { path: '', redirectTo: 'Home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'playlists', component: PlaylistsComponent },
    { path: 'songs', component: SongsComponent },
    { path: '**', component: Page404Component}

];
