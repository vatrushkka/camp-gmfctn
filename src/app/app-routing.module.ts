import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@shared/guards/auth.guard'
import { AuthComponent } from "@app/modules/+auth/auth.component";

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'sign-in',
    redirectTo: 'badges',
    // redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/+dashboard/dashboard.module').then(module => module.DashboardModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'badges',
    loadChildren: () => import('./modules/+badges/badges.module').then(module => module.BadgesModule),
    // canActivate: [AuthGuard]
  },
  // {
  //   path: 'sign-in',
  //   component: AuthComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
