import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDashboardComponent } from './products-dashboard.component';
import { ProductsListComponent } from '../../components/products-list/products-list.component';
import { ProductComponent } from '../../components/product/product.component';
import { ProductsDashboardRoutingModule } from './products-dashboard-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ProductsDashboardComponent,
    ProductsListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsDashboardRoutingModule,
    FontAwesomeModule
  ],
  exports: [ProductsDashboardComponent]
})
export class ProductsDashboardModule { }
