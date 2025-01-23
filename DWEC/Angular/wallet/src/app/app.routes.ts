import { Routes } from '@angular/router';
import { MarketComponent } from './market/market.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { CreditsComponent } from './credits/credits.component';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [

    { path: '', redirectTo: 'market', pathMatch: 'full' },
    { path: 'market', component: MarketComponent  },
    { path: 'wallet', component: MyWalletComponent },
    { path: 'credits', component: CreditsComponent },
    { path: '**', component: Page404Component}

];

