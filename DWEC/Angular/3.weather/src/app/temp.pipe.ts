import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TempPipe implements PipeTransform {

  transform(value: number, numDecimals: number = 0): string {//si no se lo pasamos cojera cero y si se lo pasamos cojera el numero
    return value.toFixed(numDecimals) + " ºC";
  }
  //recibe de entrada una temperatura con decimales
  //devuelve una temperatura sin decimales
}
