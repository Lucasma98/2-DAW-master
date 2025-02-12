import { Component , Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WalletService } from '../../../wallet.service';

@Component({
  selector: 'app-asset-quantity',
  imports: [FormsModule],
  templateUrl: './asset-quantity.component.html',
  styles: ``
})
export class AssetQuantityComponent {

  @Input() coin: any;

  constructor(private wallet:WalletService){}


  saveWallet(){
    this.wallet.saveWallet()
  }

  validateQuant(n:string) { 
    if (isNaN(parseFloat(n)) || parseFloat(n) < 0) {
      this.coin.quantity = 0;
    }
  }

}
