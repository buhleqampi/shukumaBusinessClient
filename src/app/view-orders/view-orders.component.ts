import { orders } from './../../../mock-data';
import { Component, OnInit } from '@angular/core';
import { Order } from '../interface/order';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css'
})
export class ViewOrdersComponent implements OnInit {

  orders: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.orders = orders.find(p => p.id );
    }}}
//   }
// import { Component } from '@angular/core';
// import { orders } from './../../../mock-data';

// @Component({
//   selector: 'app-view-orders',
//   templateUrl: './view-orders.component.html',
//   styleUrl: './view-orders.component.css'
// })

// export class ViewOrdersComponent  {
// }

