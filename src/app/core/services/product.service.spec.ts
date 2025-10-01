import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { ProductService } from './product.service';
import { Product } from '../models/product.interface';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  const baseUrl = 'https://fakestoreapi.com/';

  const mockProduct: Product = {
    id: 1,
    title: 'Test Product',
    price: 99.99,
    description: 'A product used for testing',
    category: 'test',
    image: 'https://example.com/image.png',
    rating: {
      rate: 4.5,
      count: 10
    }
  };

  const mockProducts: Product[] = [mockProduct, { ...mockProduct, id: 2 }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch the list of products', () => {
    let response: Product[] | undefined;

    service.getProducts().subscribe((products) => {
      response = products;
    });

    const req = httpMock.expectOne(`${baseUrl}products`);
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);

    expect(response).toEqual(mockProducts);
  });

  it('should fetch a product by ID', () => {
    let response: Product | undefined;

    service.getProductByID(mockProduct.id).subscribe((product) => {
      response = product;
    });

    const req = httpMock.expectOne(`${baseUrl}products/${mockProduct.id}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockProduct);

    expect(response).toEqual(mockProduct);
  });

  it('should create a product', () => {
    let response: Product | undefined;

    service.createProduct(mockProduct).subscribe((product) => {
      response = product;
    });

    const req = httpMock.expectOne(`${baseUrl}products`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockProduct);
    req.flush(mockProduct);

    expect(response).toEqual(mockProduct);
  });

  it('should update a product', () => {
    const updatedProduct: Product = { ...mockProduct, title: 'Updated Product' };
    let response: Product | undefined;

    service.updateProduct(updatedProduct.id, updatedProduct).subscribe((product) => {
      response = product;
    });

    const req = httpMock.expectOne(`${baseUrl}products/${updatedProduct.id}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedProduct);
    req.flush(updatedProduct);

    expect(response).toEqual(updatedProduct);
  });

  it('should delete a product', () => {
    let response: Product | undefined;

    service.deleteProduct(mockProduct.id).subscribe((res) => {
      response = res;
    });

    console.log(`${baseUrl}products/${mockProduct.id}`);
    const req = httpMock.expectOne(`${baseUrl}products/${mockProduct.id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(mockProduct);

    expect(response).toEqual(mockProduct);
  });
});
