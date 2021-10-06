import { Component, Input, OnInit } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { Node } from 'src/app/core/models/node/node.model';
import { GetPercentPipe } from 'src/app/shared/pipes/get-percent.pipe';

@Component({
  selector: 'chart-stats',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  constructor() {}
  // Pipe to get percentage of a number
  percent = new GetPercentPipe();
  // var
  _node!: Node;
  data!: any[];
  // styles
  primaryColor: string = '#00AEFF';
  secondaryColor: string = '#004565';

  /* CHART CONFIG */ // Default data asigned but it is possible send custom data via component selector
  @Input()
  get node(): any {
    // This allow me to hear any changes in the Input
    return this._node;
  }
  set node(node: Node) {
    this._node = node;
    this.generateCharts(this._node); // when a change arise, call this function to show node details
  }

  @Input() labels: boolean = false; // get value from parent component, but it have a default value, in this case "false"
  @Input() doughnut: boolean = false;
  @Input() dataType?: 'ram' | 'disk'; // this value is required, just to know if it have to show ram or disk stats

  @Input() colors: Color = {
    // get colors, with a default value
    name: '',
    selectable: false,
    group: ScaleType.Quantile,
    domain: [this.primaryColor, this.secondaryColor], // colors
  };
  @Input() legend: any = {
    // get legend, with default: false
    show: false,
    position: LegendPosition.Below,
  };

  /* CHART FILLING */

  generateCharts = (
    node: any // Check if this chart is for ram or disk
  ) => (this.dataType === 'ram' ? this.fetchRam(node) : this.fetchDisk(node));

  fetchDisk(node: Node) {
    // Assign disk data to an Array with objects -- Also utilized to reassign data on changes
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

  fetchRam(node: Node) {
    // Assign ram data to an Array with objects -- Also utilized to reassign data on changes
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
    this.generateCharts(this._node); // Generate charts with initial value
  }
}
