import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDashboardComponent } from './products-dashboard.component';
import { ProductsListComponent } from '../../components/products-list/products-list.component';
import { ProductComponent } from '../../components/product/product.component';
import { ProductsDashboardRoutingModule } from './products-dashboard-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddProductModalComponent } from '../../components/add-product-modal/add-product-modal.component';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsDashboardComponent,
    ProductsListComponent,
    AddProductModalComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    ProductsDashboardRoutingModule,
    FontAwesomeModule,
    NgbTooltip,
    ReactiveFormsModule,
  ],
  exports: [ProductsDashboardComponent],
})
export class ProductsDashboardModule {}
