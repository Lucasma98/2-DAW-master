import { Component } from '@angular/core';
import { AssetActionsComponent } from "./asset-actions/asset-actions.component";
import { AssetQuantityComponent } from "./asset-quantity/asset-quantity.component";
import { WalletService } from '../../wallet.service';

@Component({
  selector: 'app-wallet',
  imports: [AssetActionsComponent, AssetQuantityComponent],
  templateUrl: './wallet.component.html',
  styles: ``
})
export class WalletComponent {
  constructor(private wallet:WalletService){}

  getWalletAssets(){
    return this.wallet.getWalletAssets()
  }

}
