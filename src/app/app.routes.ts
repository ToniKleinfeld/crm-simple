import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {path: '', title:'Dashboard', component: DashboardComponent},
  {path: 'user', title:'User', loadComponent: () => import('./user/user.component').then(c => c.UserComponent),},
];
