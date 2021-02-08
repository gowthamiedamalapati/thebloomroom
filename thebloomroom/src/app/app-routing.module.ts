import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path:'', redirectTo:'/shop', pathMatch: 'full'},
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'shop', component: ProductsComponent},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
