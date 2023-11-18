import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './auth/auth.service';
import { RouterOutlet } from '@angular/router';
import { fader } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader],
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
    console.log(localStorage.getItem('language'));
    this.translate.use(localStorage.getItem('language') || 'pl');
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData?.['animation'];
  }
}
