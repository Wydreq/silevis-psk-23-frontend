import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { PassingIntershipFormComponent } from './components/passing-intership-form/passing-intership-form.component';

@NgModule({
  declarations: [UserComponent, PassingIntershipFormComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
