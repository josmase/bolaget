import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Filter} from './filter';
import {Product} from './product';

@Injectable()
export class ProductsService {
  private products: Product[];
  private apiUrl: string;
  list1Event: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://api.tjenixen.se/systemet';
  }

  /**
   * Performs a http request to get products matching the options. When done it emits a event to all listeners.
   * @param {Filter} options The options to use for the request.
   * @returns {Promise<any>} On succes a array of products. Otherwise some form of error message.
   */
  requestProducts(options: Filter): Promise<any> {
    return new Promise((resolve, reject) =>
      this.http.get<Product[]>(this.createUrl(options)).subscribe(data => {
        this.products = data;
        this.list1Event.emit(data);
        resolve(data);
      }, err => reject(err))
    );
  }

  /**
   * perform a http request to get the product matching the id.
   * @param {Number} id The id to search for.
   * @returns {Promise<any>} Promise from the http request.
   */
  requestProduct(id: Number): Promise<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/product/' + id).toPromise();
  }

  /**
   * Return the latest products.
   * @returns {Object} The latest products. Might not have been initialized.
   */
  getProducts() {
    return this.products;
  }

  /**Gets the product with the matching article id
   *
   * @param {Number} id The article id of the product to find
   * @returns {null} If there are no products.
   */
  getProduct(id: Number): Product[] {
    if (this.products !== undefined && this.products !== null) {
      return this.products.filter(product => product.Artikelid === id);
    }
    return null;
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
