import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../search/products.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private sub: any;
  private product;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      this.getProduct(id).then(data => this.product = data[0]);
    });
  }

  /**
   * Gets the product either from aöready retrived data or by making a new request for data.
   * @param {Number} id The id to find.
   */
  private async getProduct(id: Number) {
    let product = this.productsService.getProduct(id);
    if (product === undefined || product === null) {
      product = await this.productsService.requestProduct(id);
    }
    return product;
  }

}
