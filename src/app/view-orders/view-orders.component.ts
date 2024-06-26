import { Component, OnInit } from '@angular/core';
import { Order } from '../interface/order';
import { orders } from '../../../mock-data';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css'
})
export class ViewOrdersComponent implements OnInit {
  orders: Order[] = orders;

  constructor() { }

  ngOnInit(): void {
  }
}
