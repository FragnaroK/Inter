import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'node-preview',
  templateUrl: './node-preview.component.html',
  styleUrls: ['./node-preview.component.scss'],
})
export class NodePreviewComponent implements OnInit {
  constructor() {}

  @Input() node?: any[any]; // get node
  @Input() index?: number; // get index from array
  @Output() sendNode = new EventEmitter(); // Event emiter to allow communication with parent component

  selectNode(node: any) {
    // send the node selected to parent component
    this.sendNode.emit(node);
  }
  ngOnInit(): void {}
}
