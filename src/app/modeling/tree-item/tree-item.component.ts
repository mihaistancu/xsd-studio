import { Component, Input, OnInit } from '@angular/core';
import { ModelItemName } from '../shared/model.service';

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.css']
})
export class TreeItemComponent implements OnInit {

  @Input() 
  item: ModelItemName = {
    name: '',
    children: []
  };

  public isExpanded: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
