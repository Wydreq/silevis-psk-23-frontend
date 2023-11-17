import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { PassingIntershipFormComponent } from './components/passing-intership/passing-intership-form/passing-intership-form.component';
import { PassFormComponent } from './components/passing-intership/pass-form/pass-form.component';
import { AttestationFormComponent } from './components/passing-intership/attestation-form/attestation-form.component';

@NgModule({
  declarations: [UserComponent, PassingIntershipFormComponent, PassFormComponent, AttestationFormComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
