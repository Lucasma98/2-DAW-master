import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByString'
})
export class FilterByStringPipe implements PipeTransform {

  transform(coins: any[], pattern: string): any {
    return coins.filter( c => c.name.toLowerCase().includes(pattern.toLowerCase()));
  }

}
