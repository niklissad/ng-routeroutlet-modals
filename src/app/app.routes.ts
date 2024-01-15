import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { AppShellComponent } from './app-shell/app-shell.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'world',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: 'world',
        loadComponent: () => import('./hello-world/hello-world.component').then(m => m.HelloWorldComponent),
      },
      {
        path: 'kitty',
        loadComponent: () => import('./hello-kitty/hello-kitty.component').then(m => m.HelloKittyComponent),
      },
      {
        path: 'guys',
        loadComponent: () => import('./hello-guys/hello-guys.component').then(m => m.HelloGuysComponent),
      },
    ]
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
