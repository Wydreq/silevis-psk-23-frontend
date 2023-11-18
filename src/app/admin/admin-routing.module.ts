import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { IntershipDatesComponent } from './components/intership-dates/intership-dates.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'students-list',
    pathMatch: 'full',
  },
  {
    path: 'students-list',
    component: StudentsTableComponent,
    pathMatch: 'full',
  },
  {
    path: 'interships-dates',
    component: IntershipDatesComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
