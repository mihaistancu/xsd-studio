import { Component, OnInit } from '@angular/core';
import { ModelItemName, ModelService } from '../shared/model.service';

@Component({
  selector: 'app-model-search',
  templateUrl: './model-search.component.html',
  styleUrls: ['./model-search.component.css']
})
export class ModelSearchComponent implements OnInit {

  items: ModelItemName[] = [];

  constructor(private service: ModelService) { }

  ngOnInit(): void {
    this.service.getAllNames().subscribe(result =>
      this.items = result);
  }

}
