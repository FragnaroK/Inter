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
  show: boolean = false; // show or hide details window
  // Get nodes
  @Input() nodes!: any[];

  ngOnInit(): void {
    // Assign Default data if any node was selected - Just for Desktop, because in mobile this table appear overlay
  }
  toggleStats = (e: any) => {
    this.show = e; // toggle details window
  };
  showNode(node: Node) {
    // Assing node seleceted to send it to child component
    this.nodeClicked = node;
  }
}
