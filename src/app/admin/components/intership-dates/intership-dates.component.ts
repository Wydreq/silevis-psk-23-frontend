import { DataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReplaySubject, Observable } from 'rxjs';
import { AddInteshipDateModalComponent } from '../add-inteship-date-modal/add-inteship-date-modal.component';
import { FormGroup } from '@angular/forms';
import { SingleDateToDisplay } from 'src/app/shared/types/SingleDateToDisplay';
import { ManageDatesService } from '../../services/manage-dates.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-intership-dates',
  templateUrl: './intership-dates.component.html',
  styleUrls: ['./intership-dates.component.scss'],
})
export class IntershipDatesComponent {
  newPracstiseData = {};
  displayedColumns: string[] = [
    'startDate',
    'endDate',
    'requestEndDate',
    'delete',
    'edit',
  ];
  dataToDisplay$: Observable<SingleDateToDisplay[]>;

  dates$: Observable<
    Record<'startDate' | 'endDate' | 'requestEndDate', string>[]
  >;

  constructor(
    public dialog: MatDialog,
    private manageDates: ManageDatesService,
    private http: HttpClient
  ) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(AddInteshipDateModalComponent, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result: FormGroup) => {});
  }

  delete(id: string) {
    this.manageDates.deleteDate(id);
  }

  edit(id: string) {
    this.manageDates.editDate(id);
  }

  ngOnInit() {
    this.dataToDisplay$ = this.manageDates.practisesDates;
    this.dates$ = this.manageDates.practisesDates;
    this.manageDates.getDates();
  }
}
