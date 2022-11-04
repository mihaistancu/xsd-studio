import { Component, Input, OnInit } from '@angular/core';
import { ModelItemName } from '../shared/model.service';

@Component({
  selector: 'app-tree-navigation',
  templateUrl: './tree-navigation.component.html',
  styleUrls: ['./tree-navigation.component.css']
})
export class TreeNavigationComponent implements OnInit {

  @Input()
  items: ModelItemName[] = [];

  constructor() { }

  ngOnInit(): void {
  }


}