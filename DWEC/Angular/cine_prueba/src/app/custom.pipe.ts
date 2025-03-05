import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatYear'
})
export class FormatYearPipe implements PipeTransform {
  transform(value: string): string {
    return `(${value})`;
  }
}
