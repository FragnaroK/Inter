import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { Node } from 'src/app/core/models/node/node.model';

@Component({
  selector: 'node-details',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.scss'],
})
export class NodeDetailsComponent implements OnInit {
  constructor() {}

  @Input() node?: Node;
  @Input() index?: number;
  @Input()
  @Input()
  show: boolean = false;
  @Output() hideD = new EventEmitter();

  toggleShow() {
    return this.hideD.emit(false);
  }

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
