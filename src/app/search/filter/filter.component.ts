import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductsService} from '../products.service';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  filterForm: FormGroup;
  public loading: Boolean;
  categories: any[];

  constructor(private formBuilder: FormBuilder, private products: ProductsService, private snackBar: MatSnackBar) {
    this.createForm();
  }

  ngOnInit() {
    this.onChanges();
    this.loading = true;
    this.products.requestProducts(this.filterForm.getRawValue())
      .then(() => this.loading = false)
      .catch(() => this.errorHandler());
    this.categories = [
      {value: 'Sprit', name: 'Sprit'},
      {value: 'Öl', name: 'Öl'},
      {value: 'Whisky', name: 'Whisky'},
      {value: 'Cider', name: 'Cider'},
      {value: 'Rött vin', name: 'Rött vin'},
      {value: 'Vitt vin', name: 'Vitt vin'},
      {value: 'Tequila', name: 'Tequila'},
      {value: 'Mousserande vin', name: 'Mousserande vin'},
      {value: 'Likör', name: 'Likör'},
      {value: 'Cognac', name: 'Cognac'},
      {value: 'Sherry', name: 'Sherry'},
      {value: 'Portvin', name: 'Portvin'},
      {value: 'Gin', name: 'Gin'},
      {value: 'Brandy', name: 'Brandy'},
      {value: 'Armagnac', name: 'Armagnac'}];
  }

  /**
   * Subscribes to changes in the form and performs a product request when it happens.
   */
  onChanges(): void {
    this.filterForm.valueChanges.subscribe(val => {
      this.loading = true;
      this.products.requestProducts(val)
        .then(() => this.loading = false)
        .catch(() => this.errorHandler());
    });
  }

  /**
   * sets loading to false and opens a snack bar message.
   */
  private errorHandler() {
    this.loading = false;
    this.snackBar.open('Kunde inte hämta produkter');
  }

  /**
   * Creates a form using formBuilder. The form matches the filter interface.
   */
  private createForm() {
    this.filterForm = this.formBuilder.group({
        price: this.formBuilder.group({
          min: null as number,
          max: null as number
        }),
        apk: this.formBuilder.group({
          min: null as number,
          max: null as number
        }),
        alcohol: this.formBuilder.group({
          min: null as number,
          max: null as number
        }),
        name: null as string,
        category: null as string
      }
    );
  }
}
