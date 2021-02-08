import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { FiltersComponent } from './products/filters/filters.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    SignInComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    ProductsComponent,
    ProductListComponent,
    FiltersComponent,
    ProductItemComponent,
    CartComponent,
    CartItemComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
