import { Component, OnInit } from '@angular/core';
import { ViewChild, HostListener } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';
import { MatMenuTrigger } from '@angular/material/menu';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/app/shared/interface/user.interface';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  user: IUser | null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.user = user;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.sidenav.close();
  }

  logoutHandler() {
    this.authService.logout();
  }
}
