import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { dataMock } from '../../mockData';
import { MatDialog } from '@angular/material/dialog';
import { AddNewStudentFormComponent } from './add-new-student-form/add-new-student-form.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss'],
})
export class StudentsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;

  allowedDates = [
    { start: new Date('03.07.2023'), end: new Date('28.07.2023') },
  ];

  displayedColumns: string[] = [
    'nr_albumu',
    'surname',
    'firstname',
    'email',
    'practiseMonth',
    'practiseDateRange',
    'company',
    'address',
    'phone',
    'passed',
    'actions',
  ];

  constructor(private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(dataMock);
  }

  pass(nr_albumu: string) {
    console.log(nr_albumu);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddNewStudentFormComponent, {
      width: '40%',
    });
    dialogRef.afterClosed().subscribe((result: FormGroup) => {});
  }
}
