import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { IntershipDatesComponent } from './components/intership-dates/intership-dates.component';
import { RequestNewDatesComponent } from './components/request-new-dates/request-new-dates.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'students-list',
    pathMatch: 'full',
    data: { animation: 'list' },
  },
  {
    path: 'students-list',
    component: StudentsTableComponent,
    pathMatch: 'full',
    data: { animation: 'list-student' },
  },
  {
    path: 'interships-dates',
    component: IntershipDatesComponent,
    pathMatch: 'full',
    data: { animation: 'intern-date' },
  },
  {
    path: 'request-new-dates',
    component: RequestNewDatesComponent,
    pathMatch: 'full',
    data: { animation: 'req-new-date' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
