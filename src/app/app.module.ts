import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {ServiceWorkerModule} from '@angular/service-worker';
import {AppComponent} from './app.component';

import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import {ProductsService} from './search/products.service';
import {OrderByPipe} from './search/order-by.pipe';
import {SearchComponent} from './search/search.component';
import {FilterComponent} from './search/filter/filter.component';
import {DisplayComponent} from './search/display/display.component';
import {AppRoutingModule} from './app-routing.module';
import {ProductComponent} from './product/product.component';
import {ToUrlPipe} from './product/to-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterComponent,
    DisplayComponent,
    ProductComponent,
    OrderByPipe,
    ToUrlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatCardModule,
    MatSnackBarModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {scope: '/angular/', enabled: environment.production})
  ],
  exports: [SearchComponent],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
