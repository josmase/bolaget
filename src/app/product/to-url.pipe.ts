import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../search/product';

@Pipe({
  name: 'toUrl'
})
export class ToUrlPipe implements PipeTransform {

  transform(value: Product, args?: any): String {
    const base = 'https://www.systembolaget.se/sok-dryck/?searchquery=';
    return base + value.nr + '&fullassortment=1';
  }
}
