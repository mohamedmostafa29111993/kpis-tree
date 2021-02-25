import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { TreeviewNode } from '../../shared/treeview-node';
import { TreeviewNodeInfo } from '../../shared/treeview-node-info';
import { GetTreeviewNodesService } from 'src/app/shared/get-treeview-nodes.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-mui-treeview',
  templateUrl: './mui-treeview.component.html',
  styleUrls: ['./mui-treeview.component.sass']
})

export class MuiTreeviewComponent implements OnInit {
  private _transformer = (node: TreeviewNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.name === node.name
        ? existingNode
        : {expandable: false, name: '', level: level+1 } as TreeviewNodeInfo;
    flatNode.name = node.name;
    flatNode.level = level;
    flatNode.expandable = !!node.children?.length;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

  flatNodeMap = new Map<TreeviewNodeInfo, TreeviewNode>();

  nestedNodeMap = new Map<TreeviewNode, TreeviewNodeInfo>();

  selectedParent: TreeviewNodeInfo | null = null;

  newItemName = '';

  treeControl = new FlatTreeControl<TreeviewNodeInfo>(node => node.level, node => node.expandable);
  treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  IsExpanded: boolean;

  constructor(private _getTreeviewNodesService: GetTreeviewNodesService) {}

  ngOnInit(): void {
    this._getTreeviewNodesService.getTreeviewNodes()
    .subscribe((data) => {
      this.dataSource.data = data;
      this._getTreeviewNodesService.dataChange.next(data);
    });

    this._getTreeviewNodesService.dataChange
    .subscribe((data) => {
      console.log('first time');
      this.dataSource.data = data;
    });
  }

  hasChild = (_: number, node: TreeviewNodeInfo) => node.expandable;

  hasNoContent = (_: number, _nodeData: TreeviewNodeInfo) => _nodeData.name === '';

  updateActiveTreeNode(event, node): void {
    event.stopPropagation();
    let oldActiveTreeNode = document.querySelector('.activeTreeNode');
    if(oldActiveTreeNode) {
      oldActiveTreeNode.classList.remove('activeTreeNode');
      event.target.classList.add('activeTreeNode');
    } else {
      event.target.classList.add('activeTreeNode');
    }
    console.log(node);
  }

  /** Select the category so we can insert the new item. */
  addNewItem(node: TreeviewNodeInfo) {
    const parentNode = this.flatNodeMap.get(node);
    this._getTreeviewNodesService.insertItem(parentNode!, '');
    this.treeControl.expand(node);
  }

  /** Save the node to database */
  saveNode(node: TreeviewNodeInfo, itemValue: string) {
    const nestedNode = this.flatNodeMap.get(node);
    this._getTreeviewNodesService.updateItem(nestedNode!, itemValue);
  }
}
