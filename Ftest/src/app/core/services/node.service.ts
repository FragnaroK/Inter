import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Node } from '../models/node/node.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NodeService {
  constructor(private http: HttpClient) {}

  getNodes(page: number): Observable<Node[]> {
    return this.http
      .get<Node[]>(
        `${
          environment.API
        }?sortBy=up_since&order=desc&p=${page.toString()}&l=20`
      )
      .pipe(retry(3));
  }
}
