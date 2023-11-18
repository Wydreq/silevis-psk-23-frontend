import { ManagePopupService } from './../../../core/services/manage-popup.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PopupState } from 'src/app/shared/types/PopupState';

@Component({
  selector: 'app-date-of-practise',
  templateUrl: './date-of-practise.component.html',
  styleUrls: ['./date-of-practise.component.scss'],
})
export class DateOfPractiseComponent {
  range: FormGroup;

  newRange() {
    this.popup.openDialog(
      PopupState.INFO,
      `Nowy termin: ${(
        this.range.get('start')?.value as Date
      ).toLocaleDateString()} - ${(
        this.range.get('end')?.value as Date
      ).toLocaleDateString()}`
    );
  }

  ngOnInit() {
    this.range = new FormGroup({
      start: new FormControl<Date | null>(null, Validators.required),
      end: new FormControl<Date | null>(null, Validators.required),
    });
  }
  constructor(private popup: ManagePopupService) {}
}
