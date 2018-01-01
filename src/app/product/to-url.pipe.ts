import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../search/product';

@Pipe({
  name: 'toUrl'
})
export class ToUrlPipe implements PipeTransform {

  transform(value: Product, args?: any): String {
    const base = 'https://www.systembolaget.se/dryck/';
    const category = this.formatString(value.Varugrupp);
    const name = this.formatString(value.Namn);

    return base + category + '/' + name + '-' + value.nr;
  }

  /**
   * Transform the string to lowercase with spaces replaced with '-' and å,ä,ö replaced with a,a,o.
   * @param {String} s The String to format.
   * @returns {string} Formatted string.
   */
  private formatString(s: String) {
    return this.replaceSwedishChars(s.toLowerCase().replace(/ /g, '-'));
  }

  /**
   * Replaces å,ä,ö with a,a,o. Input most be lowercase.
   * @param {String} s The string to replace in.
   * @returns {string} String with å,ä,ö replaced.
   */
  private replaceSwedishChars(s: String) {
    return s.replace(/å/g, 'a').replace(/ä/g, 'a').replace(/ö/g, 'o');
  }

}
