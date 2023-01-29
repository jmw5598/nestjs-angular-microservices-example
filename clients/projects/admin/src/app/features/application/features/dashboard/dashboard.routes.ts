import { Routes } from '@angular/router';

import { HasPermissionGuard } from '@vsp/admin/core/guards';
import { PermissionNames } from '@vsp/core';

export const dashboardRoutes: Routes = [
  {
    path: 'overview',
    canActivate: [HasPermissionGuard],
    data: {
      requiredPermissionName: PermissionNames.DASHBOARD_OVERVIEW
    },
    loadComponent: () => 
      import('./pages/dashboard/dashboard.component')
        .then(c => c.DashboardComponent)
  },
  {
    path: '**',
    redirectTo: 'overview',
    pathMatch: 'full'
  }
];
