import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { TableDefinition } from '@vsp/datatable';
import { fadeAnimation } from '@vsp/core';

import { defaultCasesTableDefinition } from '../../constants/cases-table-definition.defaults';

@Component({
  selector: 'vsp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    NzBreadCrumbModule,
    NzPageHeaderModule,
  ]
})
export class DashboardComponent { }
