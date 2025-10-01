import { Component, inject } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddProductModalComponent } from '../../components/add-product-modal/add-product-modal.component';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss'],
})
export class ProductsDashboardComponent {
  // === Dependencias ===
  private _modalService = inject(NgbModal);
  // === Estado ====
  // Icons
  faWhatsapp = faWhatsapp;

  // === Métodos Públicos ===
  public openAddProductModal() {
    const modalRef = this._modalService.open(AddProductModalComponent);
  }
}
