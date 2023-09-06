import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'view',
    loadComponent: () => import('./components/view/view.component').then(c => c.ViewComponent)
  }
];
