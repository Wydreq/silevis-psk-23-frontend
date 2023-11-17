import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../shared/interface/user.interface';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<IUser | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  signIn(email: string) {
    this.http.get<IUser>(`/api/user/${email}`).subscribe((user: IUser) => {
      this.user.next(user);
      localStorage.setItem('userData', JSON.stringify(user));
      user.studentNumber
        ? this.router.navigate(['student'])
        : this.router.navigate(['/supervisor']);
    });
  }

  autoLogin() {
    const userJSON: string | null = localStorage.getItem('userData');
    if (userJSON) {
      const user: IUser = JSON.parse(userJSON);
      this.user.next(user);
    }
  }

  logout() {
    localStorage.removeItem('userData');
    this.user.next(null);
    this.router.navigate(['/auth']);
  }
}
