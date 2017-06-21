import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addzero'
})
export class AddzeroPipe implements PipeTransform {
  transform(value: any, args: any): any {
    let addDigit =  parseFloat(args);
    return value.toFixed(addDigit);
  }
}
