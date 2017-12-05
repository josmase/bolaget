import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.onChanges();
  }

  onChanges(): void {
    this.filterForm.valueChanges.subscribe(val => {
      console.log(val);
    });
  }

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
    });
  }
}
