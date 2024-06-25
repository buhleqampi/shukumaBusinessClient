import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products = this.productService.getProducts();

  constructor(private productService: ProductService) {}

  addProduct() {
    this.productService.addProduct({ name: 'New Product', description: 'Product Description' });
  }

  editProduct(index: number) {
    const newName = prompt('Enter new product name:', this.products[index].name);
    const newDescription = prompt('Enter new product description:', this.products[index].description);
    if (newName !== null && newDescription !== null) {
      this.productService.updateProduct(index, { name: newName, description: newDescription });
    }
  }

  deleteProduct(index: number) {
    this.productService.deleteProduct(index);
  }
}
