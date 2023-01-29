import { Routes } from '@angular/router';
import { HasPermissionGuard } from '@vsp/admin/core/guards';
import { PermissionNames } from '@vsp/core';
import { SettingsComponent } from './pages/settings/settings.component';

export const settingRoutes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./pages/settings/settings.component')
        .then(c => c.SettingsComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
