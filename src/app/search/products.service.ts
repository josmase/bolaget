import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Filter} from './filter';

@Injectable()
export class ProductsService {
  private products: Object;
  private apiUrl: string;
  list1Event: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://api.hejsan.ml/systemet';
  }

  /**
   * Performs a http request to get products matching the options. When done it emits a event to all listeners.
   * @param {Filter} options The options to use for the request.
   */
  requestProducts(options: Filter) {
    this.http.get(this.createUrl(options)).subscribe(data => {
      this.products = data;
      this.list1Event.emit(data);
    });
  }

  /**
   * Return the latest products.
   * @returns {Object} The latest products. Might not have been initialized.
   */
  getProducts() {
    return this.products;
  }

  /**
   * Craates a url from the options and apiUrl. Does not add options with a null value.
   * @param {Filter} options The options to use as params in url.
   * @returns {string} The url with the added params.
   */
  private createUrl(options: Filter) {
    let params: HttpParams = new HttpParams();
    params = this.addIfValue(params, options.price.min, 'PrisinklmomsMin');
    params = this.addIfValue(params, options.price.max, 'PrisinklmomsMax');
    params = this.addIfValue(params, options.apk.min, 'apkMin');
    params = this.addIfValue(params, options.apk.max, 'apkMax');
    params = this.addIfValue(params, options.alcohol.min, 'AlkoholhaltMin');
    params = this.addIfValue(params, options.alcohol.max, 'AlkoholhaltMax');
    params = this.addIfValue(params, options.name, 'Namn');
    params = this.addIfValue(params, options.category, 'Varugrupp');
    return this.apiUrl + '/products?' + params;
  }

  /**
   * Appends a key with a value if the given value isn't null.
   * @param {HttpParams} params The paranbs to append to.
   * @param value The value to append and check.
   * @param {string} key The value to usea as param key
   * @returns {HttpParams} The param after either appending or not appending.
   */
  private addIfValue(params: HttpParams, value: any, key: string) {
    return value === null || value === undefined ? params : params.append(key, value);
  }
}
