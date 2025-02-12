import { Pipe, PipeTransform } from '@angular/core';
import { MarketDataService } from './market-data.service';

@Pipe({
  name: 'conversionEUR'
})
export class ConversionEURPipe implements PipeTransform {

  constructor( private marketDataService: MarketDataService) { }

  ConvertUSDToEUR() {
    return this.marketDataService.ConvertUSDToEUR();
  }


  transform(value: number, ...args: unknown[]): number {
    return value;
  }

}
