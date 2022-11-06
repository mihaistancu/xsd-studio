import { Component, OnInit } from '@angular/core';
import { ModelItemName, ModelService } from '../shared/model.service';

@Component({
  selector: 'app-model-explorer',
  templateUrl: './model-explorer.component.html',
  styleUrls: ['./model-explorer.component.css']
})
export class ModelExplorerComponent implements OnInit {

  items: ModelItemName[] = [];

  constructor(private service: ModelService) { }

  ngOnInit(): void {
    this.service.getAllNames().subscribe(result =>
      this.items = result);
  }
  
}
