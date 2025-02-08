import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {path: '', title:'Dashboard', component: DashboardComponent},
  {path: 'user', title:'User', loadComponent: () => import('./user/user.component').then(c => c.UserComponent),},
  {path: 'user/:id', title:'User Detail', loadComponent: () => import('./user/user-datail/user-datail.component').then(c => c.UserDatailComponent),},
];
