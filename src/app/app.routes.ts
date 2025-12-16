import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'loggedIn', canActivate:[AuthGuard],
    loadComponent: () => import('./loggedIn/loggedIn.page').then((m) => m.LoggedInPage),
  },
  {
    path: 'createAccount',
    loadComponent: () => import('./createAccount/createAccount.page').then((m) => m.CreateAccountPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
