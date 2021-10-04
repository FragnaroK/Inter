import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Node } from '../models/node/node.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NodeService {
  constructor(private http: HttpClient) {}

  nodes: any[] = [
    {
      id: '1',
      free_ram: 61953,
      allocated_ram: 3209,
      free_disk: 40399,
      allocated_disk: 14782,
      up_since: '2021-10-02T17:01:42.682Z',
    },
    {
      id: '2',
      free_ram: 21047,
      allocated_ram: 34280,
      free_disk: 95480,
      allocated_disk: 25486,
      up_since: '2020-07-18T22:30:17.577Z',
    },
    {
      id: '3',
      free_ram: 36975,
      allocated_ram: 55514,
      free_disk: 90323,
      allocated_disk: 46207,
      up_since: '2020-11-09T11:40:37.354Z',
    },
    {
      id: '4',
      free_ram: 7851,
      allocated_ram: 94636,
      free_disk: 26677,
      allocated_disk: 548,
      up_since: '2020-08-26T07:24:45.539Z',
    },
    {
      id: '5',
      free_ram: 17991,
      allocated_ram: 68208,
      free_disk: 23845,
      allocated_disk: 76298,
      up_since: '2020-07-30T12:54:37.313Z',
    },
    {
      id: '6',
      free_ram: 79420,
      allocated_ram: 25182,
      free_disk: 58168,
      allocated_disk: 66241,
      up_since: '2020-10-29T14:11:19.214Z',
    },
    {
      id: '7',
      free_ram: 98757,
      allocated_ram: 29573,
      free_disk: 5942,
      allocated_disk: 82648,
      up_since: '2020-07-08T15:14:38.716Z',
    },
    {
      id: '8',
      free_ram: 98731,
      allocated_ram: 61995,
      free_disk: 10480,
      allocated_disk: 78095,
      up_since: '2020-06-12T05:01:21.120Z',
    },
    {
      id: '9',
      free_ram: 44522,
      allocated_ram: 3982,
      free_disk: 92513,
      allocated_disk: 8092,
      up_since: '2020-11-05T09:15:56.990Z',
    },
    {
      id: '10',
      free_ram: 91273,
      allocated_ram: 19307,
      free_disk: 45919,
      allocated_disk: 46565,
      up_since: '2020-06-25T19:16:59.601Z',
    },
    {
      id: '11',
      free_ram: 54160,
      allocated_ram: 72211,
      free_disk: 55191,
      allocated_disk: 48466,
      up_since: '2021-01-03T13:03:03.240Z',
    },
    {
      id: '12',
      free_ram: 64049,
      allocated_ram: 57296,
      free_disk: 92881,
      allocated_disk: 97419,
      up_since: '2020-10-12T21:50:35.044Z',
    },
    {
      id: '13',
      free_ram: 90986,
      allocated_ram: 34043,
      free_disk: 38931,
      allocated_disk: 69074,
      up_since: '2021-01-12T07:16:49.063Z',
    },
    {
      id: '14',
      free_ram: 51472,
      allocated_ram: 40710,
      free_disk: 67803,
      allocated_disk: 85278,
      up_since: '2021-01-18T15:32:38.719Z',
    },
    {
      id: '15',
      free_ram: 57637,
      allocated_ram: 12368,
      free_disk: 11332,
      allocated_disk: 6614,
      up_since: '2020-06-18T13:30:21.950Z',
    },
    {
      id: '16',
      free_ram: 53570,
      allocated_ram: 98332,
      free_disk: 15426,
      allocated_disk: 68223,
      up_since: '2020-09-23T08:18:40.844Z',
    },
    {
      id: '17',
      free_ram: 62911,
      allocated_ram: 63472,
      free_disk: 37944,
      allocated_disk: 48431,
      up_since: '2020-08-03T01:33:13.510Z',
    },
    {
      id: '18',
      free_ram: 77224,
      allocated_ram: 15507,
      free_disk: 47484,
      allocated_disk: 93010,
      up_since: '2020-10-16T04:47:44.265Z',
    },
    {
      id: '19',
      free_ram: 35754,
      allocated_ram: 54596,
      free_disk: 39601,
      allocated_disk: 30732,
      up_since: '2020-05-08T18:04:59.172Z',
    },
    {
      id: '20',
      free_ram: 62409,
      allocated_ram: 78475,
      free_disk: 40194,
      allocated_disk: 881,
      up_since: '2020-09-01T23:20:30.931Z',
    },
    {
      id: '21',
      free_ram: 21104,
      allocated_ram: 57780,
      free_disk: 18142,
      allocated_disk: 34203,
      up_since: '2021-01-25T07:47:42.838Z',
    },
    {
      id: '22',
      free_ram: 7962,
      allocated_ram: 68034,
      free_disk: 57355,
      allocated_disk: 63306,
      up_since: '2020-03-16T10:30:04.335Z',
    },
    {
      id: '23',
      free_ram: 30894,
      allocated_ram: 60670,
      free_disk: 63504,
      allocated_disk: 51725,
      up_since: '2020-04-07T06:48:23.727Z',
    },
    {
      id: '24',
      free_ram: 25233,
      allocated_ram: 14150,
      free_disk: 77933,
      allocated_disk: 20059,
      up_since: '2020-03-08T15:14:25.616Z',
    },
    {
      id: '25',
      free_ram: 82560,
      allocated_ram: 14877,
      free_disk: 99125,
      allocated_disk: 58277,
      up_since: '2020-09-30T01:25:16.333Z',
    },
    {
      id: '26',
      free_ram: 58733,
      allocated_ram: 46889,
      free_disk: 43321,
      allocated_disk: 64058,
      up_since: '2020-03-08T03:08:56.803Z',
    },
    {
      id: '27',
      free_ram: 80815,
      allocated_ram: 97642,
      free_disk: 9768,
      allocated_disk: 57904,
      up_since: '2020-02-21T10:52:47.170Z',
    },
    {
      id: '28',
      free_ram: 21017,
      allocated_ram: 78618,
      free_disk: 93179,
      allocated_disk: 61240,
      up_since: '2020-10-22T07:54:49.347Z',
    },
    {
      id: '29',
      free_ram: 6111,
      allocated_ram: 86877,
      free_disk: 46771,
      allocated_disk: 7815,
      up_since: '2020-04-09T05:11:37.354Z',
    },
    {
      id: '30',
      free_ram: 2992,
      allocated_ram: 90875,
      free_disk: 171,
      allocated_disk: 71334,
      up_since: '2020-08-04T08:28:46.226Z',
    },
    {
      id: '31',
      free_ram: 47314,
      allocated_ram: 26600,
      free_disk: 83769,
      allocated_disk: 49545,
      up_since: '2020-04-18T18:26:27.795Z',
    },
    {
      id: '32',
      free_ram: 23093,
      allocated_ram: 99994,
      free_disk: 60567,
      allocated_disk: 8137,
      up_since: '2020-03-11T01:46:56.120Z',
    },
    {
      id: '33',
      free_ram: 83389,
      allocated_ram: 20045,
      free_disk: 38311,
      allocated_disk: 30475,
      up_since: '2020-03-05T07:49:51.988Z',
    },
    {
      id: '34',
      free_ram: 45643,
      allocated_ram: 49579,
      free_disk: 40297,
      allocated_disk: 11263,
      up_since: '2020-08-20T07:44:29.377Z',
    },
    {
      id: '35',
      free_ram: 23115,
      allocated_ram: 46399,
      free_disk: 16507,
      allocated_disk: 47233,
      up_since: '2020-02-07T16:49:47.677Z',
    },
    {
      id: '36',
      free_ram: 41479,
      allocated_ram: 25051,
      free_disk: 12169,
      allocated_disk: 46628,
      up_since: '2020-05-29T20:07:25.593Z',
    },
    {
      id: '37',
      free_ram: 7984,
      allocated_ram: 60095,
      free_disk: 30361,
      allocated_disk: 52707,
      up_since: '2020-08-09T15:43:24.159Z',
    },
    {
      id: '38',
      free_ram: 41646,
      allocated_ram: 8564,
      free_disk: 66728,
      allocated_disk: 90580,
      up_since: '2020-06-07T16:24:06.737Z',
    },
    {
      id: '39',
      free_ram: 82653,
      allocated_ram: 79880,
      free_disk: 49176,
      allocated_disk: 37774,
      up_since: '2020-02-12T09:01:22.378Z',
    },
    {
      id: '40',
      free_ram: 68630,
      allocated_ram: 25240,
      free_disk: 81177,
      allocated_disk: 59635,
      up_since: '2020-02-21T18:23:59.888Z',
    },
    {
      id: '41',
      free_ram: 61100,
      allocated_ram: 11216,
      free_disk: 77977,
      allocated_disk: 3004,
      up_since: '2020-09-09T07:27:53.960Z',
    },
    {
      id: '42',
      free_ram: 19812,
      allocated_ram: 24849,
      free_disk: 79742,
      allocated_disk: 72314,
      up_since: '2020-05-13T07:47:46.251Z',
    },
    {
      id: '43',
      free_ram: 28987,
      allocated_ram: 17895,
      free_disk: 73872,
      allocated_disk: 2484,
      up_since: '2020-02-24T22:18:45.124Z',
    },
    {
      id: '44',
      free_ram: 20901,
      allocated_ram: 73516,
      free_disk: 84855,
      allocated_disk: 95162,
      up_since: '2020-07-06T21:30:55.261Z',
    },
    {
      id: '45',
      free_ram: 42047,
      allocated_ram: 24611,
      free_disk: 32669,
      allocated_disk: 99714,
      up_since: '2020-07-03T22:36:05.125Z',
    },
    {
      id: '46',
      free_ram: 94143,
      allocated_ram: 73351,
      free_disk: 72940,
      allocated_disk: 6363,
      up_since: '2020-07-30T18:07:27.495Z',
    },
    {
      id: '47',
      free_ram: 51053,
      allocated_ram: 55384,
      free_disk: 19561,
      allocated_disk: 80101,
      up_since: '2020-08-09T03:02:54.556Z',
    },
    {
      id: '48',
      free_ram: 29515,
      allocated_ram: 68727,
      free_disk: 53547,
      allocated_disk: 41238,
      up_since: '2020-02-02T13:59:04.623Z',
    },
    {
      id: '49',
      free_ram: 4545,
      allocated_ram: 91698,
      free_disk: 49408,
      allocated_disk: 48300,
      up_since: '2020-12-28T21:22:05.341Z',
    },
    {
      id: '50',
      free_ram: 53800,
      allocated_ram: 3864,
      free_disk: 37317,
      allocated_disk: 49979,
      up_since: '2020-07-26T21:04:56.969Z',
    },
  ];

  getNodes(page: number): Observable<Node[]> {
    return this.http.get<Node[]>(
      `${environment.API}?p=${page.toString()}&l=20`
    );
  }
  getNodesOffline(): Node[] {
    return this.nodes;
  }
}
