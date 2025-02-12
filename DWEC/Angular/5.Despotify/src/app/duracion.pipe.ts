import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duracion'
})
export class DuracionPipe implements PipeTransform {

  transform(duracion: number): string { //value es la variable que guardara este dato(cancion.length) //unknown es el tipo de dato de cancion.lengt, es decir el valor que es (number) //...args son extras
    return Math.floor(duracion / 60) + ':' + ('0' + Math.floor(duracion % 60 )).slice(-2); //floor te quita los decimales //% te devuelve el resto de una division //slice siempre coge dos digitos de derecha a izquierda(entonces si le añades el valor 0 se pone a la izquierda, y si tiene dos digitos coge los dos, pero si tiene tres, se la suda el nuevo 0 que se coloca a la izquierda)
  }

}
