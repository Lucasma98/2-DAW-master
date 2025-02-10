import { Component } from '@angular/core';
import { MarketDataService } from '../../market-data.service';
import { CoincardComponent } from "./coincard/coincard.component";

@Component({
  selector: 'app-market',
  imports: [CoincardComponent,],
  templateUrl: './market.component.html',
  styles: ``
})
export class MarketComponent {

  constructor(private MarketService: MarketDataService){
    this.getMarketData()

  }

  private coins:any[] = []

  getMarketData(){
   this.MarketService.getMarketData().subscribe(
    json => { 

      let moneda:any = json
      this.coins = moneda.data
    }
  )
  
  }

  getCoins(){
    return this.coins
  }



  GetByNombre(pattern : string){

    let coins = this.getCoins()
    let coinsFiltradas:any[] = []

    for (let coin of coins){
      if(coin.name.toLowerCase().includes(pattern.toLowerCase())){
        coinsFiltradas.push(coin)

      }

    }

    return coinsFiltradas

  }
}
