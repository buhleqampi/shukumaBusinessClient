import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
  salesValue: number = 0;
  visitorsValue: number = 0;
  ordersValue: number = 0;

  ngOnInit() {
    this.updateData();
    setInterval(() => {
      this.updateData();
    }, 2000);
  }

  updateData() {
    this.salesValue = Math.floor(Math.random() * 10000);
    this.visitorsValue = Math.floor(Math.random() * 1000);
    this.ordersValue = Math.floor(Math.random() * 100);
  }
}
