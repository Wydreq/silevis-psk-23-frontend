import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-switch-language',
  templateUrl: './switch-language.component.html',
  styleUrls: ['./switch-language.component.scss'],
})
export class SwitchLanguageComponent {
  constructor(private translate: TranslateService) {}

  switch() {
    localStorage.setItem(
      'language',
      this.translate.currentLang === 'en' ? 'pl' : 'en'
    );
    this.translate.use(this.translate.currentLang === 'en' ? 'pl' : 'en');
  }
}
