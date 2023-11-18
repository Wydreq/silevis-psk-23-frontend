import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentGuard } from './core/guards/student.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { LoggedInGuard } from './core/guards/logged-in.guard';
import { SupervisorGuard } from './core/guards/supervisor.guard';

const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  {
    path: 'student',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canActivate: [StudentGuard, AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [LoggedInGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'supervisor',
    loadChildren: () =>
      import('./super-vision/super-vision.module').then(
        (m) => m.SuperVisionModule
      ),
    canActivate: [SupervisorGuard, AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
