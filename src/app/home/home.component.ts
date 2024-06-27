import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // cards: number[] = [1, 2, 3, 4];
  services = [
    {
      title: 'Service 1',
      description: 'Description of Service 1',
      imageUrl: 'service1.jpg',
      url: '/addproduct'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}


