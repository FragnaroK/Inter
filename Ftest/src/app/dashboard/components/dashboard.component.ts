import { Component, OnInit } from '@angular/core';
import { NodeService } from 'src/app/core/services/node.service';
import { Node } from 'src/app/core/models/node/node.model';
import * as moment from 'moment';
import * as lodash from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  test: boolean = true;
  nodes: Node[] = [];
  newNodes: number = 0;
  lastNode: string = '';
  sortedNodes!: Node[];

  dateRange = {
    start: moment().local().format('yyyy-MM-DDTHH:mm:ss.SSS').toString(),
    end: moment()
      .local()
      .subtract(1, 'days')
      .format('yyyy-MM-DDTHH:mm:ss.SSS')
      .toString(),
  };

  constructor(private nodes_api: NodeService) {}
  ngOnInit(): void {
    this.test ? this.fetchNodesOffline() : this.fetchNodes();
  }
  /* DEV FETCH */
  fetchNodesOffline() {
    // Using a function from Nodes Service to get the Nodes in the API
    this.nodes_api.getNodesOffline().forEach((node) => {
      // push each node to nodes
      this.nodes.push(node);
      // push new node to newNodes:
      //"If this node is new (last 24h), then push to newNodes. But if not, don't do anything"
      moment(this.nodesDateFormat(node.up_since)).isAfter(this.dateRange.end)
        ? this.newNodes++
        : null;
    });

    // push the list of nodes sorted ascending into sortedNodes
    this.sortedNodes = this.sortNodesByDate(this.nodes, false);

    // save the last new node into lastNode
    this.lastNode = moment(this.sortedNodes[0].up_since).format(
      'ddd, MMM DD LT'
    );
  }
  /* PROD FETCH*/
  fetchNodes() {
    // Using a function from Nodes Service to get the Nodes in the API
    this.nodes_api.getNodes(1).subscribe(
      (node) => {
        // push each node to nodes
        this.nodes = node;
        this.afterFetch(node); // sort and organize data
      },
      (err) => console.error('Error on Get', new Error(err))
    );
  }

  afterFetch(nodes: Node[]) {
    // Count new Nodes:
    //"If this node is new (last 24h), then add 1 to NewNodes. But if not, don't do anything"
    nodes.forEach((node) => {
      moment(this.nodesDateFormat(node.up_since)).isAfter(this.dateRange.end)
        ? this.newNodes++
        : null;
    });

    // push the list of nodes sorted ascending into sortedNodes
    this.sortedNodes = this.sortNodesByDate(nodes, true);

    // save the last new node into lastNode
    this.lastNode = moment(this.sortedNodes[0].up_since).format(
      'ddd, MMM DD LT'
    );
  }

  // Simple function: first Arg is the list to sort,
  // second Arg [false === "descendent"], [true === "ascendent"]
  sortNodesByDate(nodes: Node[], option: Boolean): Node[] {
    return option
      ? lodash.orderBy(
          // TRUE
          nodes,
          (node) => moment(node.up_since).format('YYYYMMDD'),
          'asc'
        )
      : lodash.orderBy(
          // FALSE
          nodes,
          (node) => moment(node.up_since).format('YYYYMMDD'), // first arg: the list to sort,
          'desc' // second arg: the node date and format,
        ); // third arg: type of order
  }
  nodesDateFormat(date: string): string {
    // change date format
    return moment(date).utc().format('yyyy-MM-DDTHH:mm:ss.SSS').toString();
  }
}
