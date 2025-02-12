import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duracion'
})
export class DuracionPipe implements PipeTransform {

  transform(duracion: unknown, ...args: unknown[]): unknown { //value es la variable que guardara este dato(cancion.length) //unknown es el tipo de dato de cancion.lengt, es decir el valor que es (number) //...args 
    return null;
  }

}
