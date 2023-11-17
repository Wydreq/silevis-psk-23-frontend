import { Component, OnInit } from '@angular/core';
import { ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { IUser } from 'src/app/shared/interface/user.interface';
import { UserService } from '../../user.service';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  user: IUser | null;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userService.user.subscribe((user) => {
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
