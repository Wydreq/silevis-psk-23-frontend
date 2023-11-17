import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperVisionRoutingModule } from './super-vision-routing.module';
import { SuperVisionComponent } from './super-vision.component';


@NgModule({
  declarations: [
    SuperVisionComponent
  ],
  imports: [
    CommonModule,
    SuperVisionRoutingModule
  ]
})
export class SuperVisionModule { }
