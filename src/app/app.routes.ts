import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./hello-world/hello-world.component').then(m => m.HelloWorldComponent),
  },
  {
    path: 'register',
    outlet: 'auth',
    loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent),
    canActivate: [authGuard]
  },
  {
    path: 'login',
    outlet: 'auth',
    loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent),
    canActivate: [authGuard]
  }
];
