import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    let transformedValue = value.toUpperCase();
    return transformedValue;
  }

}
