import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService, private http: HttpClient) {
    this.translate.setDefaultLang('pl');
    this.http.get('asd').subscribe(() => {
      console.log('asd');
    });
  }
}
