import { Component } from '@angular/core';
import { navbarData } from './navData';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
 collapsed = false;
 navData = navbarData;
}
