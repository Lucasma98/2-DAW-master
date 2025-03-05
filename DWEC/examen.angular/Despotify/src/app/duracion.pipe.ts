import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duracion'
})
export class DuracionPipe implements PipeTransform {

  transform(value: number): string {
    // math.floor / 60 coge los minutos y ignora los segundos que recuperamos con el otro floor % y el "0" + slice -2 nos saca el 0 al principio y mantiene 2 posiciones a la derecha si el numero es mayor de 2 digitos
    return Math.floor(value / 60) + ":" + ("0" + Math.floor(value % 60)).slice(-2);
  }

}
