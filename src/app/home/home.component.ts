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

  // addProduct() {
  //   this.productService.addProduct({ name: 'New Product', description: 'Product Description' });
  // }

}
