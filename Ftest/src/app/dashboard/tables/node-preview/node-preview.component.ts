import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'node-preview',
  templateUrl: './node-preview.component.html',
  styleUrls: ['./node-preview.component.scss'],
})
export class NodePreviewComponent implements OnInit {
  constructor() {}

  @Input() node?: any[any];
  @Input() index?: number;

  ngOnInit(): void {}
}
