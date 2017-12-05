import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private products: ProductsService) {
    this.products.list1Event.subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
