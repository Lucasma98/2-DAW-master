import { Routes } from '@angular/router';
import { Page404Component } from './sections/page404/page404.component';
import { MarketComponent } from './sections/market/market.component';
import { WalletComponent } from './sections/wallet/wallet.component';
import { CreditsComponent } from './sections/credits/credits.component';

export const routes: Routes = [

    { path: '', redirectTo: 'market', pathMatch: 'full' },
    { path: 'market', component: MarketComponent  },
    { path: 'wallet', component: WalletComponent },
    { path: 'credits', component: CreditsComponent },
    { path: '**', component: Page404Component}


];
