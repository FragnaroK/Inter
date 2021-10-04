import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Node } from 'src/app/core/models/node/node.model';
@Component({
  selector: 'node-preview',
  templateUrl: './node-preview.component.html',
  styleUrls: ['./node-preview.component.scss'],
})
export class NodePreviewComponent implements OnInit {
  constructor() {}

  @Input() node?: Node; // get node
  @Input() index?: number; // get index from array
  @Output() sendNode = new EventEmitter(); // Event emiter to allow communication with parent component
  @Output() selected = new EventEmitter(); // Event emiter to allow communication with parent component

  selectedEvent() {
    console.log('clickeado');
    return this.selected.emit(true);
  }
  selectNode(node: Node) {
    // send the node selected to parent component
    this.sendNode.emit(node);
  }
  ngOnInit(): void {}
}
