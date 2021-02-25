import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TreeviewNode } from './treeview-node';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class GetTreeviewNodesService {
  dataChange = new BehaviorSubject<TreeviewNode[]>([]);

  get data(): TreeviewNode[] { return this.dataChange.value; }

  private url: string = 'http://localhost:3000/data';

  constructor(private _http: HttpClient) { }

  getTreeviewNodes(): Observable<TreeviewNode[]> {
    return this._http.get<TreeviewNode[]>(this.url);
  }

  insertItem(parent: TreeviewNode, name: string) {
    if (parent.children) {
      parent.children.push({name: name} as TreeviewNode);
      this.dataChange.next(this.data);
    }
  }

  updateItem(node: TreeviewNode, name: string) {
    node.name = name;
    this.dataChange.next(this.data);
  }
}
