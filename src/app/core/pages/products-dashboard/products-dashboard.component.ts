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
  /**
   * Abre el modal para añadir un nuevo producto
   */
  public openAddProductModal() {
    const modalRef = this._modalService.open(AddProductModalComponent);
  }

  // Manejo del menú que se ve solo en pantallas md (>=768px) y lg (<1200px)
  /**
   * Alterna el estado del menú (navbar) entre abierto y cerrado
   */
  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /**
   * Cierra el menú al hacer click en un elemento del menú
   */
  public onMenuItemClick(): void {
    if (window.innerWidth >= 768 && window.innerWidth < 1200) {
      this.isMenuOpen = false;
    }
  }

  /**
   * Maneja el evento de redimensionamiento de la ventana
   */
  @HostListener('window:resize')
  public handleResize(): void {
    if (window.innerWidth >= 1200 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}
