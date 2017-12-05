import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterComponent} from './filter/filter.component';
import {DisplayComponent} from './display/display.component';
import {SearchComponent} from './search.component';
import {MatSidenavModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [SearchComponent, FilterComponent, DisplayComponent],
  exports: [SearchComponent]
})
export class SearchModule {
}
