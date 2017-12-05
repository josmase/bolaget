import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterComponent} from './filter/filter.component';
import {DisplayComponent} from './display/display.component';
import {SearchComponent} from './search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchComponent, FilterComponent, DisplayComponent],
  exports: [SearchComponent]
})
export class SearchModule {
}
