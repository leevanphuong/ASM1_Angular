import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { UpdateProductComponent } from './component/update-product/update-product.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [
 {path: '', component: HomepageComponent},
 {path: 'product', component: ProductListComponent},
 {path: 'product/detail/:id', component: ProductDetailComponent},
 {path: 'product/add', component: AddProductComponent},
 {path: 'product/update/:id', component:UpdateProductComponent},
 {path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }