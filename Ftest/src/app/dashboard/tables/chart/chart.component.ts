import { Component, Input, OnInit } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { GetPercentPipe } from 'src/app/shared/pipes/get-percent.pipe';

@Component({
  selector: 'chart-stats',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  constructor() {}

  percent = new GetPercentPipe();

  _node: any;
  data!: any[];
  primaryColor: string = '#00AEFF';
  secondaryColor: string = '#004565';

  /* CHART CONFIG */ // Default data asigned but it is possible send custom data via component selector
  @Input()
  get node(): any {
    // This allow me to hear any changes in the Input
    return this._node;
  }
  set node(node: any) {
    this._node = node;
    this.generateCharts(this._node);
  }

  @Input() labels: boolean = false;
  @Input() doughnut: boolean = false;
  @Input() dataType?: 'ram' | 'disk';

  @Input() colors: Color = {
    name: '',
    selectable: false,
    group: ScaleType.Quantile,
    domain: [this.primaryColor, this.secondaryColor],
  };
  @Input() legend: any = {
    show: false,
    position: LegendPosition.Below,
  };

  /* CHART FILLING */

  generateCharts = (
    node: any // Check if this chart is for ram or disk
  ) => (this.dataType === 'ram' ? this.fetchRam(node) : this.fetchDisk(node));

  fetchDisk(node: any) {
    // Assign disk data to an Array with objects -- Also utilized to reAssign data on changes
    let totalDisk = node.allocated_disk + node.free_disk;
    let data = [
      {
        name: 'Allocated Space',
        value: this.percent.transform(node.allocated_disk, totalDisk), // this returns the percentage of the value in 'allocated_disk'
      },
      {
        name: 'Free Space',
        value: this.percent.transform(node.free_disk, totalDisk), // this returns the percentage of the value in 'free_disk'
      },
    ];
    this.data = [...data];
  }

  fetchRam(node: any) {
    // Assign ram data to an Array with objects -- Also utilized to reAssign data on changes
    let totalRam = node.allocated_ram + node.free_ram;
    let data = [
      {
        name: 'Allocated Space',
        value: this.percent.transform(node.allocated_ram, totalRam), // this returns the percentage of the value in 'allocated_ram'
      },
      {
        name: 'Free Space',
        value: this.percent.transform(node.free_ram, totalRam), // this returns the percentage of the value in 'free_ram'
      },
    ];
    this.data = [...data];
  }
  ngOnInit(): void {
    this.generateCharts(this._node); // Generate charts with default
  }
}
