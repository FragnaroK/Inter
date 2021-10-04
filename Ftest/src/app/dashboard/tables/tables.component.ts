import { Component, OnInit, Input } from '@angular/core';
import { Node } from 'src/app/core/models/node/node.model';

@Component({
  selector: 'tables-stats',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {
  constructor() {}

  nodeClicked: any;
  show: boolean = false;

  @Input() nodes?: Node[]; // Get nodes

  ngOnInit(): void {
    this.showNode(this.nodes![0]); // Assign Default data if any node was selected - Just for Desktop, because in mobile this table appear overlay
  }
  toggleStats = (e: any) => {
    this.show = e;
    console.log('table', e);
    console.log('table', this.show);
  };
  showNode(node: Node) {
    // Assing node seleceted to send it to child component
    this.nodeClicked = node;
  }
}
