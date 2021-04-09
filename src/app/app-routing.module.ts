import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './+dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard', 
    loadChildren: () => import('./+dashboard/dashboard.module').then(module => module.DashboardModule)
  },
  {
    path: 'badges',
    loadChildren: () => import('./+badges/badges.module').then(module => module.BadgesModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
