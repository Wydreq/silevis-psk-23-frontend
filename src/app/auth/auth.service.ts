import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../shared/interface/user.interface';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../core/user.service';
import { ManagePopupService } from '../core/services/manage-popup.service';
import { PopupState } from '../shared/types/PopupState';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    private popup: ManagePopupService
  ) {}

  signIn(email: string) {
    this.http.get<IUser>(`/api/user/${email}`).subscribe((user: IUser) => {
      this.userService.user.next(user);
      localStorage.setItem('userData', JSON.stringify(user));
      if (user.staffStatus === 2) {
        this.http
          .get(`http://localhost:8000/users?adminId=${user.id}`)
          .subscribe((users: any) => {
            this.userService.adminUsers.next(users);
            console.log(users);
            localStorage.setItem('adminUsers', JSON.stringify(users[0]));
            this.popup.openDialog(PopupState.OK, 'Everything is ok');
          });
      }
      user.studentNumber
        ? this.router.navigate(['/student'])
        : this.router.navigate(['/admin']);
    });
  }

  autoLogin() {
    const userJSON: string | null = localStorage.getItem('userData');
    if (userJSON) {
      const user: IUser = JSON.parse(userJSON);
      this.userService.user.next(user);
      this.signIn(user.email);
    }
  }

  logout() {
    localStorage.removeItem('userData');
    this.userService.user.next(null);
    this.router.navigate(['/auth']);
  }
}
