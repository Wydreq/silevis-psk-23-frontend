import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PopupState } from 'src/app/shared/types/PopupState';
import { getHeadingText } from './data/headingText';
import { ManagePopupService } from '../services/manage-popup.service';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  state: Observable<PopupState>;
  text: Observable<string>;
  headingText: string;

  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    private popupService: ManagePopupService
  ) {}

  protected close(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.state = this.popupService.state;
    this.text = this.popupService.text;
    this.headingText = getHeadingText(this.popupService.state.getValue());
  }
}
