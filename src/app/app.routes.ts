import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'loggedIn',
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
