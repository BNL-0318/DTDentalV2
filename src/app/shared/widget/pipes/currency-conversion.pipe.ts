import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency-conversion'
})
export class CurrencyConversionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
