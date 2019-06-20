import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public routerLinks: { path: string; icon: string; title: string; }[] = [
    {
      title: 'Calendar',
      path: 'calendar',
      icon: 'pi-calendar'
    },
    {
      title: 'Forms',
      path: 'forms',
      icon: 'pi-copy'
    },
    {
      title: 'Charts',
      path: 'charts',
      icon: 'pi-chart-bar'
    }
  ];

  constructor() {
  }
  
  ngOnInit() {
  }
  
}
