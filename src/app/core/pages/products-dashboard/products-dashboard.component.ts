import { Component, HostListener, inject } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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
  faBars = faBars;
  isMenuOpen = false;

  // === Métodos Públicos ===
  public openAddProductModal() {
    const modalRef = this._modalService.open(AddProductModalComponent);
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public onMenuItemClick(): void {
    if (window.innerWidth >= 768 && window.innerWidth < 1200) {
      this.isMenuOpen = false;
    }
  }

  @HostListener('window:resize')
  public handleResize(): void {
    if (window.innerWidth >= 1200 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}
