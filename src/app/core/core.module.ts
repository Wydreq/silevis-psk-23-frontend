import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PopupComponent } from './components/popup.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, PopupComponent],
  imports: [CommonModule, SharedModule],
  exports: [NavbarComponent, FooterComponent],
})
export class CoreModule {}
