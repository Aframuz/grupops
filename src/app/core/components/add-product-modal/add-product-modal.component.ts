import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss'],
})
export class AddProductModalComponent implements OnInit {
  // === Dependencias ===
  private _fb = inject(FormBuilder);
  public activeModal = inject(NgbActiveModal);

  // === Estado ===
  showTooltip = false;
  addProductForm!: FormGroup;

  // === Lifecycle Hooks ===
  ngOnInit() {
    this.addProductForm = this._fb.group({
      image: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]],
    });
  }

  // === Métodos Públicos ===s
  /**
   * Levanta el tooltip que reemplaza la funcionalidad de agregar producto
   * @param tooltip Tooltip que se levanta
   */
  onAddProductClick(tooltip: any) {
    tooltip.open();
    setTimeout(() => tooltip.close(), 1500);
  }
}
