import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {

  constructor(private http: HttpClient) { }


  private urlBase = "https://api.coinlore.net/api/"
  private startSuffix = "tickers/?start=1"
  private limitSuffix = "&limit=20"



  getMarketData() {

    return this.http.get(this.urlBase + this.startSuffix +  this.limitSuffix)

  }







}
