import { Component, Input } from '@angular/core';
import { WalletService } from '../../../wallet.service';

@Component({
  selector: 'app-coincard',
  imports: [],
  templateUrl: './coincard.component.html',
  styles: ``
})
export class CoincardComponent {

  @Input() coin: any;

    constructor(private WalletSrvc: WalletService){

    }

    addToWallet(coin: any){
      this.WalletSrvc.addToWallet(this.coin)
    }

    isAlreadyInWallet(coin: any){
       return this.WalletSrvc.isAlredyInWallet(coin)
    }

}
