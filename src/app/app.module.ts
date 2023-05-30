import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { UpdateProductComponent } from './component/update-product/update-product.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductListComponent,
    UpdateProductComponent,
    ProductDetailComponent,
    AddProductComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
