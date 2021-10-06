import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Node } from 'src/app/core/models/node/node.model';

@Component({
  selector: 'nodes-table',
  templateUrl: './nodes-table.component.html',
  styleUrls: ['./nodes-table.component.scss'],
})
export class NodesTableComponent implements OnInit {
  constructor() {}

  index: number = 0;
  nodeClicked: any;
  show: boolean = false;
  // Get nodes
  @Input() nodes!: any[];

  @Output() Clicked = new EventEmitter();
  @Output() toggle = new EventEmitter();

  ngOnInit(): void {
    setTimeout(() => {
      this.showNode(this.nodes![0]); // Assign Default data if any node was selected - Just for Desktop, because in mobile this table appear overlay
    }, 1500);
  }

  changePage(dir: string) {
    // change page of nodes
    document.getElementById('list-nodes')?.scrollTo(0, 0);
    dir === 'next'
      ? this.index < this.nodes!.length - 1 // check if it is the last page
        ? this.index++
        : console.log('No more pages')
      : dir === 'prev'
      ? this.index > 0 // check if it is the first page
        ? this.index--
        : console.log('No previous page')
      : console.error(new Error('An error ocurred with pagination'));
  }

  toggleStats = (e: any) => {
    // send event to open details window
    this.toggle.emit(e);
  };
  showNode(node: Node) {
    // Assing node seleceted to send it to child component
    this.Clicked.emit(node);
  }
}
