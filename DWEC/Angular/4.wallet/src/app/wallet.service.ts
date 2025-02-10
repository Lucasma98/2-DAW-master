import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private wallet:any[] = []

  constructor() { }

  addToWallet(coin:any){
    if (!this.isAlreadyInWallet(coin))
      this.wallet.push({
        ...coin,
        quantity: 0
      })

  }
  getWalletAssets(){
    return this.wallet
  }

  isAlreadyInWallet(coin:any){
    return this.wallet.find(c => c.id == coin.id)

  }
  removeFromWallet(coin:any){
    let position = this.wallet.findIndex(c=> c.id == coin.id)
    this.wallet.splice(position,1)
  }
}
