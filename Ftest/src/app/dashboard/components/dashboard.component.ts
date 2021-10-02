import { Component, OnInit } from '@angular/core';
import { NodeService } from 'src/app/core/services/node.service';
import * as moment from 'moment';
import * as lodash from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  nodes: any[] = [];
  newNodes: any[] = [];
  lastNode: string = '';
  sortedNodes: any[] = [];

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
    this.fetchNodes();
  }

  fetchNodes() {
    // Using a function from Nodes Service to get the Nodes in the API
    this.nodes_api.getNodes().forEach((node) => {
      // push each node to nodes
      this.nodes.push(node);
      // push new node to newNodes:
      //"If this node is new (last 24h), then push to newNodes. But if not, don't do anything"
      moment(this.nodesDateFormat(node.up_since)).isAfter(this.dateRange.end)
        ? this.newNodes.push(node)
        : null;
    });

    // push the list of nodes sorted ascending into sortedNodes
    this.sortedNodes = this.sortNodesByDate(this.nodes, true);

    // save the last new node into lastNode
    this.lastNode = moment(this.sortedNodes[0].up_since).format(
      'ddd, MMM DD LT'
    );
  }

  // Simple function: first Arg is the list to sort,
  // second Arg [false === "descendent"], [true === "ascendent"]
  sortNodesByDate(nodes: any[], option: Boolean) {
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
  nodesDateFormat(date: string) {
    // change date format
    return moment(date).utc().format('yyyy-MM-DDTHH:mm:ss.SSS').toString();
  }
}
