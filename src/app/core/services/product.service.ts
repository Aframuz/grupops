import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // === Dependencias ===
  private _httpClient = inject(HttpClient);

  // === Estado ===
  private _baseUrl: string = 'https://fakestoreapi.com/'

  // === Constructor ===
  constructor() { }

  // === Métodos Públicos ===
  public getProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(`${this._baseUrl}products`);
  }

  public getProductByID(id: number): Observable<Product> {
    return this._httpClient.get<Product>(`${this._baseUrl}products/${id}`);
  }

  public createProduct(product: Product): Observable<Product> {
    return this._httpClient.post<Product>(`${this._baseUrl}products`, product);
  }

  public updateProduct(id: number, product: Product): Observable<Product> {
    return this._httpClient.put<Product>(`${this._baseUrl}products/${id}`, product);
  }

  public deleteProduct(id: number): Observable<Product> {
    return this._httpClient.delete<Product>(`${this._baseUrl}products/${id}`);
  }
}
