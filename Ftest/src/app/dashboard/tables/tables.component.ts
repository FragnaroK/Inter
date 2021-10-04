import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tables-stats',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {
  constructor() {}

  nodeClicked: any;
  @Input() nodes?: any[any]; // Get nodes

  ngOnInit(): void {
    this.showNode(this.nodes[0]); // Assign Default data if any node was selected - Just for Desktop, because in mobile this table appear overlay
  }

  showNode(node: any) {
    // Assing node seleceted to send it to child component
    this.nodeClicked = node;
  }
}
