import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tables-stats',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {
  constructor() {}

  @Input() nodes?: any[any];

  ngOnInit(): void {}
}
