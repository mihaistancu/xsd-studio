import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { ModelItemName, ModelService } from '../shared/model.service';
import { ViewService } from '../shared/view.service';

@Component({
  selector: 'app-model-explorer',
  templateUrl: './model-explorer.component.html',
  styleUrls: ['./model-explorer.component.css']
})
export class ModelExplorerComponent implements OnInit {

  items: ModelItemName[] = [];

  constructor(
    private modelService: ModelService,
    private viewService: ViewService
  ) { }

  ngOnInit(): void {
    this.viewService.branch$
      .pipe(switchMap(branch => this.modelService.getAllNames(branch)))
      .subscribe(result => this.items = result);
  }
  
}
