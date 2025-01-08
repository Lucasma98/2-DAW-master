import { Routes } from '@angular/router';
import { EvSectionComponent } from './ev-section/ev-section.component';
import { HomeComponent } from './home/home.component';
import { MfSectionComponent } from './mf-section/mf-section.component';
import { Page404SectionComponent } from './page404-section/page404-section.component';
import { GarageSectionComponent } from './garage-section/garage-section.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home' , component: HomeComponent},
    {path: 'vehicles' , component: EvSectionComponent},
    {path: 'manufacturers' , component: MfSectionComponent},
    {path: 'garage', component: GarageSectionComponent},
    {path: '**', component: Page404SectionComponent}
];
