import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(private router: Router) {}

  navigateToRoute(route: string) {
    this.router.navigate([route]);
  }
  // salesValue: number = 0;
  // visitorsValue: number = 0;
  // ordersValue: number = 0;

  // ngOnInit() {
  //   this.updateData();
  //   setInterval(() => {
  //     this.updateData();
  //   }, 2000);
  // }

  // updateData() {
  //   this.salesValue = this.salesValue + 500;
  //   this.visitorsValue = this.visitorsValue + 50;
  //   this.ordersValue = this.ordersValue + 5;
  // }
}
