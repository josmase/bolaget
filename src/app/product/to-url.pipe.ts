import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'toUrl'
})
export class ToUrlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const base = 'https://www.systembolaget.se/dryck/';
    const category = value.Kategori;

    return null;
  }

}
