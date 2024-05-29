import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'previous',
  },
  {
    path: 'previous',
    loadComponent: () =>
      import('./pages/previous/previous.page').then((m) => m.PreviousPage),
  },
  {
    path: 'signal',
    loadComponent: () =>
      import('./pages/signal/signal.page').then((m) => m.SignalPage),
  },
];
