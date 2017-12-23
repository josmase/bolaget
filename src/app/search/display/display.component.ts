import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ProductsService} from '../products.service';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import {Products} from '../product';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit, AfterViewInit {
  public products: Products[];
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<Products>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  /**
   * Initializes the component and registers it for events from productService
   * @param {ProductsService} productsService
   */
  constructor(private productsService: ProductsService) {
    this.addListener();
  }

  ngOnInit() {
    this.displayedColumns = ['name', 'price', 'volume', 'alcohol', 'apk', 'category'];
    this.dataSource = new MatTableDataSource<Products>(this.products);
  }


  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.sort.start = 'desc';
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /**
   * Adds a listener to the products service and updates the datasource and the products with the new data.
   */
  private addListener() {
    this.productsService.list1Event.subscribe(data => {
      this.products = data;
      this.dataSource.data = this.products;
    });
  }
}
