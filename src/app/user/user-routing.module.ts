import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { PassingIntershipFormComponent } from './components/passing-intership/passing-intership-form/passing-intership-form.component';
import { ApplicationForInternFormComponent } from './components/application-for-intern-form/application-for-intern-form.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    pathMatch: 'full',
  },
  {
    path: 'passing-intership',
    component: PassingIntershipFormComponent,
    pathMatch: 'full',
  },
  {
    path: 'application-for-intership',
    component: ApplicationForInternFormComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
