import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SimpleStatsComponent } from './simple-stats/simple-stats.component';
import { TablesComponent } from './tables/tables.component';
import { DashboardComponent } from './components/dashboard.component';
import { NodePreviewComponent } from './tables/node-preview/node-preview.component';
import { NodeDetailsComponent } from './tables/node-details/node-details.component';

import { ToGBPipe } from '../shared/pipes/to-gb.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    SimpleStatsComponent,
    TablesComponent,
    NodePreviewComponent,
    NodeDetailsComponent,
    ToGBPipe,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
