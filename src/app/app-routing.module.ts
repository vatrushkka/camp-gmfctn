import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from "@app/modules/+auth/auth.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/+dashboard/dashboard.module').then(module => module.DashboardModule)
  },
  {
    path: 'badges',
    loadChildren: () => import('./modules/+badges/badges.module').then(module => module.BadgesModule)
  },
  {
    path: 'sign-in',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
