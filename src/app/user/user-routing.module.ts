import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { PassingIntershipFormComponent } from './components/passing-intership/passing-intership-form/passing-intership-form.component';
import { ApplicationForInternFormComponent } from './components/application-for-intern-form/application-for-intern-form.component';
import { DateOfPractiseComponent } from './components/date-of-practise/date-of-practise.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    pathMatch: 'full',
    data: { animation: 'user' },
  },
  {
    path: 'passing-intership',
    component: PassingIntershipFormComponent,
    pathMatch: 'full',
    data: { animation: 'intern' },
  },
  {
    path: 'date-of-practise',
    component: DateOfPractiseComponent,
    pathMatch: 'full',
    data: { animation: 'date' },
  },
  {
    path: 'application-for-intership',
    component: ApplicationForInternFormComponent,
    pathMatch: 'full',
    data: { animation: 'app' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
