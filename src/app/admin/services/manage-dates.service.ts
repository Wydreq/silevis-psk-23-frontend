import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddInteshipDateModalComponent } from '../components/add-inteship-date-modal/add-inteship-date-modal.component';
import { HttpClient } from '@angular/common/http';
import { concatMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ManageDatesService {
  constructor(public dialog: MatDialog, private http: HttpClient) {}

  practisesDates = new BehaviorSubject<any>(null);

  deleteDate(id: string) {
    this.http.delete(`http://localhost:8000/dates/${id}`).subscribe(() => {
      this.getDates();
    });
  }

  addNewDate(value: any) {
    return this.http
      .post<any>('http://localhost:8000/dates', value)
      .subscribe(() => {
        this.getDates();
      });
  }

  editDate(id: string) {
    this.dialog.open(AddInteshipDateModalComponent, {
      width: '40%',
      data: this.practisesDates.getValue().find((date: any) => date.id === id),
    });
  }

  confirmEdit(id: string, value: any) {
    this.http.put(`http://localhost:8000/dates/${id}}`, value).subscribe(() => {
      this.getDates();
    });
  }

  getDates() {
    return this.http
      .get<any>('http://localhost:8000/dates')
      .subscribe((dates) => {
        this.practisesDates.next(dates);
      });
  }
}
