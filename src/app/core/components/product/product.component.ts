import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.interface';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  // === Icons ===
  faTrash = faTrash;

  // === Inputs & Outputs ===
  @Input() product!: Product & { stock: number };
  @Output() delete = new EventEmitter<Product>();

  // === Métodos Públicos ===
  public deleteProduct(product: Product) {
    this.delete.emit(product);
  }
}
