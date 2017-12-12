import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterComponent} from './filter/filter.component';
import {DisplayComponent} from './display/display.component';
import {SearchComponent} from './search.component';
import {
  MatSidenavModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule,
  MatTableModule, MatSortModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProductsService} from './products.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule
  ],
  declarations: [SearchComponent, FilterComponent, DisplayComponent],
  exports: [SearchComponent],
  providers: [ProductsService]
})
export class SearchModule {
}
