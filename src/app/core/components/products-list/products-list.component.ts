import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product, ProductWithStock } from '../../models/product.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  // === Dependencias ===
  private _productService = inject(ProductService);

  // === Estado ===
  products: ProductWithStock[] = [];
  isLoading = true;

  /* Se puede usar un Observable directamente en la plantilla con el pipe async
    para agregar y eliminar un producto se comenta esto.
  */
  // products$: Observable<Product[]> = this._productService.getProducts();

  // === Lifecycle Hooks ===
  ngOnInit(): void {
    this._fetchProducts();
  }

  // === Métodos Públicos ===
  /**
   * Elimina un producto de la lista de productos
   * @param productToDelete producto a filtrar de la lista de productos
   */
  public onDeleteProduct(productToDelete: Product): void {
    this.products = this.products.filter(
      (p) => p.title !== productToDelete.title
    );
  }

  // === Métodos Privados ====
  /**
   * Trae los productos desde la API
   * pipe para añadir stock que no viene de la api pero quería usarla igual
   */
  private _fetchProducts(): void {
    this._productService
      .getProducts()
      .pipe(
        map((products) => {
          return this._addStockToProducts(products);
        })
      )
      .subscribe((products) => {
        this.products = products;
        this.isLoading = false;
      });
  }

  /**
   * Agrega el campo stock a los productos
   * @param products productos a los cuales se les añade el stock
   * @returns (Product & {stock: number})[]
   */
  private _addStockToProducts(products: Product[]): ProductWithStock[] {
    return products.map((product) => {
      return {
        ...product,
        stock: Math.floor(Math.random() * 100) + 1,
      };
    });
  }
}
