import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { products } from '../../../mock-products';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent  implements OnInit{
  products: Product[] = products;

  constructor() { }

  ngOnInit(): void {
  }

}
