import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperVisionComponent } from './super-vision.component';

const routes: Routes = [
  { path: '', redirectTo: 'supervisor', pathMatch: 'full' },
  { path: 'supervisor', component: SuperVisionComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperVisionRoutingModule {}
