import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../shared/interface/user.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<IUser | null>(null);

  constructor(private http: HttpClient) {}

  signIn(email: string) {
    this.http.get<IUser>(`/api/user/${email}`).subscribe((user: IUser) => {
      this.user.next(user);
    });
  }
}
