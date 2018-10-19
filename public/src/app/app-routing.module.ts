import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EditproductComponent } from './editproduct/editproduct.component';


const routes: Routes = [
  { path: 'landing',component: LandingComponent },
  { path: 'newproduct',component: NewproductComponent },
  { path: 'products',component: ProductsComponent },
  { path: 'products/edit/:id',component: EditproductComponent },
  { path: '',  pathMatch: 'full', redirectTo: '/landing' },
  { path: '**',component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
