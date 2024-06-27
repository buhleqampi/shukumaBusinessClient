import { Component, OnInit } from '@angular/core';
import { Order } from '../interface/order';
import { orders } from '../../../mock-data';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css'
})
export class ViewOrdersComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.product = products.find(p => p.id );
    }
}
