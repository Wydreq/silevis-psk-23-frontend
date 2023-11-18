import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { IUser } from '../shared/interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = new BehaviorSubject<IUser | null>(null);
  adminUsers = new BehaviorSubject(null);
}
