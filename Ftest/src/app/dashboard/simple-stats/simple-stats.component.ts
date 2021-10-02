import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'simple-stats',
  templateUrl: './simple-stats.component.html',
  styleUrls: ['./simple-stats.component.scss'],
})
export class SimpleStatsComponent implements OnInit {
  constructor() {}

  @Input() nodes?: number; // communication between components
  @Input() newNodes?: number; // Just the details that this component need
  @Input() lastNode?: string;

  ngOnInit(): void {}
}
