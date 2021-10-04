import { Component, Input, OnInit } from '@angular/core';
import { LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { GetPercentPipe } from 'src/app/shared/pipes/get-percent.pipe';

@Component({
  selector: 'node-details',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.scss'],
})
export class NodeDetailsComponent implements OnInit {
  constructor() {}

  @Input() node?: any;
  @Input() index?: number;

  primaryColor: string = '#00AEFF';
  secondaryColor: string = '#004565';

  /*  CHART CONFIG */
  legend = {
    show: true,
    position: LegendPosition.Below,
  };
  colors = {
    name: '',
    selectable: false,
    group: ScaleType.Quantile,
    domain: [this.primaryColor, this.secondaryColor],
  };

  ngOnInit(): void {}
}
