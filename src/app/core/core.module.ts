import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PopupComponent } from './components/popup.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PopupComponent,
    LoadingSpinnerComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule, TranslateModule],
  exports: [NavbarComponent, FooterComponent, LoadingSpinnerComponent],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
})
export class CoreModule {}
