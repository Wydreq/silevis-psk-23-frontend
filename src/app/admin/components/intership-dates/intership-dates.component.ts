import { DataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReplaySubject, Observable } from 'rxjs';
import { AddInteshipDateModalComponent } from '../add-inteship-date-modal/add-inteship-date-modal.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-intership-dates',
  templateUrl: './intership-dates.component.html',
  styleUrls: ['./intership-dates.component.scss'],
})
export class IntershipDatesComponent {
  newPracstiseData = {};
  displayedColumns: string[] = ['startDate', 'endDate', 'requestEndDate'];
  practisesDates = [
    {
      startDate: new Date(),
      endDate: new Date(),
      requestEndDate: new Date(),
    },
    {
      startDate: new Date(),
      endDate: new Date(),
      requestEndDate: new Date(),
    },
  ];
  dataToDisplay = [...this.practisesDates];
  dataSource = this.practisesDates;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddInteshipDateModalComponent, {
      width: '40%',
      data: { newPractiseData: this.newPracstiseData },
    });

    dialogRef.afterClosed().subscribe((result: FormGroup) => {
      const {
        range: { start, end },
        requestEndDate,
      } = result.value;
      console.log(start);
      this.dataSource = [
        ...this.practisesDates,
        { startDate: start, endDate: end, requestEndDate },
      ];
    });
  }

  removeData() {
    this.dataToDisplay = [];
    this.dataSource = this.dataToDisplay;
  }
}
