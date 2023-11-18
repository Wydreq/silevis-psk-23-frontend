import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManageDatesService } from '../../services/manage-dates.service';

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
      start: new FormControl<Date | null>(null, Validators.required),
      end: new FormControl<Date | null>(null, Validators.required),
    }),
    requestEndDate: new FormControl<Date | null>(null, Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<AddInteshipDateModalComponent>,
    private manageDates: ManageDatesService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onSubmit() {
    this.manageDates.addNewDate(this.dates.value);
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    if ((this.data as any).id) {
      const valueDate = this.manageDates.practisesDates
        .getValue()
        .find((date: any) => date.id === (this.data as any).id);

      this.dates.patchValue({
        range: {
          end: valueDate.range.end,
          start: valueDate.range.start,
        },
        requestEndDate: valueDate.requestEndDate,
      });
    }
  }
}
