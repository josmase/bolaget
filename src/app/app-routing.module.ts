import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {ProductComponent} from './product/product.component';

const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'product/:id', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
