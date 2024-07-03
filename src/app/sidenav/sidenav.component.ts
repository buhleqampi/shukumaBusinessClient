import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface SideNavToggle {
  screenwidth:number;
  collapsed : boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
isSidebarOpen: any;
toggleSidebar() {
throw new Error('Method not implemented.');
}
 collapsed = false;
 navData = [
  {
    label: 'Home',
    routerLink: '/userhome',
    icon: 'fas fa-home'
  },
  {
    label: 'Stats',
    routerLink: '/admin',
    icon: 'fas fa-chart-bar'
  },
  {
   label: 'Chats',
   RouterLink: '',
   icon:'fas fa-comment'
  },
  {
   label:'Settings',
   RouterLink: '',
   icon:'fas fa-cog'
  },

  {
   label: 'LogOut',
   RouterLink:'',
   icon: 'fas fa-sign-out'
  },
  // Add more nav items as needed
];

 @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  screenwidth!: number;
 toggleCollapse():void{
  this.collapsed = !this.collapsed;
  this.onToggleSideNav.emit({collapsed: this.collapsed, screenwidth: this.screenwidth})
 }

 closeSidenav() :void{
  this.collapsed = false;
 }
}

