import { Routes } from '@angular/router';
import { SongsComponent } from './sections/songs/songs.component';
import { HomeComponent } from './sections/home/home.component';
import { PlaylistsComponent } from './sections/playlists/playlists.component';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent  },
    { path: 'songs', component: SongsComponent },
    { path: 'playlists', component: PlaylistsComponent },
    { path: '**', component: Page404Component}





];
