import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  startDate: Date;
  endDate: Date;
  requestEndDate: Date;
}

@Component({
  selector: 'app-add-inteship-date-modal',
  templateUrl: './add-inteship-date-modal.component.html',
  styleUrls: ['./add-inteship-date-modal.component.scss'],
})
export class AddInteshipDateModalComponent {
  protected dates = new FormGroup({
    range: new FormGroup({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
    }),
    requestEndDate: new FormControl<Date | null>(null),
  });

  constructor(
    public dialogRef: MatDialogRef<AddInteshipDateModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
