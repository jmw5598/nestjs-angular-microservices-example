import { Routes } from '@angular/router';

import { ModulePermissionNames } from '@vsp/core';
import { HasModulePermissionGuard } from '@vsp/admin/core/guards';

export const applicationRoutes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./pages/application/application.component').then(c => c.ApplicationComponent),
    children: [
      {
        path: 'admin',
        canActivate: [HasModulePermissionGuard],
        data: {
          requiredModulePermissionName: ModulePermissionNames.ADMINISTRATION_MODULE
        },
        loadChildren: () => 
          import('./features/administration/administration.routes').then(r => r.administrationRoutes)
      },
      {
        path: 'dashboard',
        canActivate: [HasModulePermissionGuard],
        data: {
          requiredModulePermissionName: ModulePermissionNames.DASHBOARD_MODULE
        },
        loadChildren: () => 
          import('./features/dashboard/dashboard.routes').then(r => r.dashboardRoutes)
      },
      {
        path: 'security',
        canActivate: [HasModulePermissionGuard],
        data: {
          requiredModulePermissionName: ModulePermissionNames.SECURITY_MODULE
        },
        loadChildren: () => 
          import('./features/security/security.routes').then(r => r.securityRoutes)
      },
      {
        path: 'account',
        loadChildren: () => 
          import('./features/account/account.routes').then(r => r.accountRoutes)
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
