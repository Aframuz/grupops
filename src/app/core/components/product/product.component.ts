import { Component, Input } from '@angular/core';
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

  // === Inputs ===
  @Input() product!: Product & { stock: number };

  // === Lifecycle Hooks ===
  ngOnInit(): void {
    console.log(this.product);
  }
}
