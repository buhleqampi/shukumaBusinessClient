import { Injectable } from '@angular/core';

interface Product {
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  getProducts() {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  updateProduct(index: number, product: Product) {
    this.products[index] = product;
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}
