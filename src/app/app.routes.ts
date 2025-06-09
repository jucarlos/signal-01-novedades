import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () =>
          import(
            './dashboard/pages/change-detection/change-detection.component'
          ),
      },

      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () =>
          import('./dashboard/pages/control-flow/control-flow.component'),
      },
      {
        path: 'defer-view',
        title: 'Defer Views',
        loadComponent: () =>
          import('./dashboard/pages/defer-views/defer-views.component'),
      },
    {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () =>
          import('./dashboard/pages/defer-options/defer-options.component'),
      },
      {
        path: 'view-transition-start',
        title: 'View Trans. Start',
        loadComponent: () =>
          import('./dashboard/pages/view-transition-start/view-transition-start.component'),
      },
      {
        path: 'view-transition-end',
        title: 'View Trans. End',
        loadComponent: () =>
          import('./dashboard/pages/view-transition-end/view-transition-end.component'),
      },
      {
        path: 'users',
        title: 'Users List',
        loadComponent: () => import('./dashboard/pages/users/users.component'),
      },

      {
        path: 'user/:id',
        title: 'User view',
        loadComponent: () => import('./dashboard/pages/user/user.component'),
      },

      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];