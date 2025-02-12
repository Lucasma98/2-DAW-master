import { Component , Input } from '@angular/core';
import { WalletService } from '../../../wallet.service';

@Component({
  selector: 'app-asset-actions',
  imports: [],
  templateUrl: './asset-actions.component.html',
  styles: ``
})
export class AssetActionsComponent {

@Input() coin: any;

constructor(private wallet:WalletService){}

moveAssetDown(coin:any){

  this.wallet.moveAssetDown(coin)

}

moveAssetUp(coin:any){

  this.wallet.moveAssetUp(coin)
}

removeFromWallet(coin:any){ 

  this.wallet.removeFromWallet(coin)
}


}
