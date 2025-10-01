import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./core/pages/products-dashboard/products-dashboard.module').then(
        (m) => m.ProductsDashboardModule
      ),
  },
  {
    path: '**',
    redirectTo: 'products', // redirección por defecto a productos
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
