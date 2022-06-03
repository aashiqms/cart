import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { ProductsComponent } from './products/products.component';
import { NabvBarComponent } from './nabv-bar/nabv-bar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeLayoutComponent,
    ProductsComponent,
    NabvBarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
