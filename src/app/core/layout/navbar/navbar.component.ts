import { Component } from '@angular/core';
import { ViewChild, HostListener } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';
import { MatMenuTrigger } from '@angular/material/menu';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.sidenav.close();
  }
}
