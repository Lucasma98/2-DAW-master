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

  constructor(private walletSrvc: WalletService){

  }

  addToWallet(coin:any){
    this.walletSrvc.addToWallet(coin)
  }

}
