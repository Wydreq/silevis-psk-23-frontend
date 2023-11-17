import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.translate.setDefaultLang('pl');
    this.translate.use('pl');
  }

  ngOnInit(): void {
    this.authService.autoLogin();
    console.log(this.translate.currentLang);
    this.translate.use('en');
  }
}
