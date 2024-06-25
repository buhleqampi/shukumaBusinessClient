import { Component } from '@angular/core';

interface SideNavToggle{
  screenwidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shukuma-business-client';

  isSideNavCollapsed = false;
  screenwidth = 0;

  onToggleSideNav(): void{
   
  }
}
