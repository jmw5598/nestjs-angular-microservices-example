import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { HasPermissionGuard } from '@vsp/admin/core/guards';
import { PermissionNames } from '@vsp/core';

import { securityPermissionsFeature, SecurityPermissionsEffects } from './features/security-permissions/store';

export const securityRoutes: Routes = [
  {
    path: 'general',
    canActivate: [HasPermissionGuard],
    data: {
      requiredPermissionName: PermissionNames.SECURITY_GENERAL
    },
    providers: [],
    loadChildren: () => 
      import('./features/security-general/security-general.routes')
        .then(r => r.securityGeneralRoutes)
  },
  {
    path: 'permissions',
    canActivate: [HasPermissionGuard],
    data: {
      requiredPermissionName: PermissionNames.SECURITY_PERMISSIONS
    },
    providers: [
      provideState(securityPermissionsFeature),
      provideEffects(SecurityPermissionsEffects)
    ],
    loadChildren: () => 
      import('./features/security-permissions/security-permissions.routes')
        .then(r => r.securityPermissionsRoutes)
  }
];
