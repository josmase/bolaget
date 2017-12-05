import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../products.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  public products;
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<any>;

  /**
   * Initializes the component and registers it for events from productService
   * @param {ProductsService} productsService
   */
  constructor(private productsService: ProductsService) {
    this.productsService.list1Event.subscribe(data => {
      this.products = data;
      console.log(data[0]);
      this.dataSource = new MatTableDataSource<any>(this.products);
    });
  }

  ngOnInit() {
    this.displayedColumns = ['name', 'price', 'volume', 'alcohol', 'apk', 'category'];
    this.dataSource = new MatTableDataSource<any>(this.products);
  }

}
