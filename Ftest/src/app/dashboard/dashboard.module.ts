import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SimpleStatsComponent } from './simple-stats/simple-stats.component';
import { TablesComponent } from './tables/tables.component';
import { DashboardComponent } from './components/dashboard.component';
import { NodePreviewComponent } from './tables/node-preview/node-preview.component';
import { NodeDetailsComponent } from './tables/node-details/node-details.component';
import { ChartComponent } from './tables/chart/chart.component';

import { ToGBPipe } from '../shared/pipes/to-gb.pipe';
import { GetPercentPipe } from '../shared/pipes/get-percent.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    SimpleStatsComponent,
    TablesComponent,
    NodePreviewComponent,
    NodeDetailsComponent,
    ChartComponent,
    ToGBPipe,
    GetPercentPipe,
  ],
  imports: [CommonModule, DashboardRoutingModule, NgxChartsModule],
  providers: [],
})
export class DashboardModule {}
