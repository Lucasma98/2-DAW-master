import { Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { ProfileComponent } from './sections/profile/profile.component';
import { RecommendComponent } from './sections/recommend/recommend.component';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'recommend', component:RecommendComponent},
  {path: '**', component:Page404Component}
];
