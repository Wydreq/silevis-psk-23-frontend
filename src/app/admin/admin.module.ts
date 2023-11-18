import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { SharedModule } from '../shared/shared.module';
import { IntershipDatesComponent } from './components/intership-dates/intership-dates.component';
import { AddInteshipDateModalComponent } from './components/add-inteship-date-modal/add-inteship-date-modal.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AddNewStudentFormComponent } from './components/students-table/add-new-student-form/add-new-student-form.component';
import { RequestNewDatesComponent } from './components/request-new-dates/request-new-dates.component';

@NgModule({
  declarations: [
    AdminComponent,
    StudentsTableComponent,
    IntershipDatesComponent,
    AddInteshipDateModalComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    TranslateModule,
  ],
})
export class AdminModule {}
