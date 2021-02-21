import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path:'', redirectTo:'/Land', pathMatch: 'full'},
  { path: 'Land', component: LandingpageComponent},
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'shop', component: ProductsComponent},
  { path: 'cart', component: CartComponent},
  { path: 'admin', component: AdminComponent},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
