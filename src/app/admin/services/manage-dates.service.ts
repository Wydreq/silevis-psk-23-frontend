import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddInteshipDateModalComponent } from '../components/add-inteship-date-modal/add-inteship-date-modal.component';
@Injectable({
  providedIn: 'root',
})
export class ManageDatesService {
  constructor(public dialog: MatDialog) {}

  practisesDates = new BehaviorSubject<any>([
    {
      id: '1',
      startDate: new Date(),
      endDate: new Date(),
      requestEndDate: new Date(),
    },
    {
      id: '2',
      startDate: new Date(),
      endDate: new Date(),
      requestEndDate: new Date(),
    },
  ]);

  addNewDates(
    dateData: Partial<{
      range: Partial<{ start: Date | null; end: Date | null }>;
      requestEndDate: Date | null;
    }>
  ) {
    const valueToPush = {
      startDate: dateData.range?.start,
      endDate: dateData.range?.end,
      requestEndDate: dateData.requestEndDate,
      id: uuidv4(),
    };

    this.practisesDates.next([...this.practisesDates.getValue(), valueToPush]);
  }

  deleteDate(id: string) {
    const newValueToPush = [...this.practisesDates.getValue()].filter(
      (value) => value.id !== id
    );

    this.practisesDates.next(newValueToPush);
  }

  editDate(id: string) {
    this.dialog.open(AddInteshipDateModalComponent, {
      width: '40%',
      data: this.practisesDates.getValue().find((date: any) => date.id === id),
    });
  }
}
