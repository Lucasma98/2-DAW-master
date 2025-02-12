import { Component } from '@angular/core';
import { AssetActionsComponent } from "./asset-actions/asset-actions.component";
import { AssetQuantityComponent } from "./asset-quantity/asset-quantity.component";
import { WalletService } from '../../wallet.service';
import { MarketDataService } from '../../market-data.service';
import { ConversionEURPipe } from '../../conversion-eur.pipe';

@Component({
  selector: 'app-wallet',
  imports: [AssetActionsComponent, AssetQuantityComponent , ConversionEURPipe],
  templateUrl: './wallet.component.html',
  styles: ``
})
export class WalletComponent {

  constructor(private WalletSrvc : WalletService , private MarketSrvc : MarketDataService) { }

  getWalletAssets(){
    return this.WalletSrvc.getWalletAssets()
  }


  ConvertUSDToEUR(){

    return this.MarketSrvc.ConvertUSDToEUR()

  }


}
