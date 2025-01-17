import { Routes } from '@angular/router';
import { HomeSectionComponent } from './home-section/home-section.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { ManageSectionComponent } from './manage-section/manage-section.component';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: HomeSectionComponent},
    {path: "search", component: SearchSectionComponent},
    {path: "manage", component: ManageSectionComponent},
    {path: "**", component: Page404Component}
];
