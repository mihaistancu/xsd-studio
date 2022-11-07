import { Component, OnInit } from '@angular/core';
import { combineLatest, switchMap } from 'rxjs';
import { Model, ModelService } from '../shared/model.service';
import { ViewService } from '../shared/view.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  model!: Model;

  constructor(
    private viewService: ViewService,
    private modelService: ModelService
  ) { }

  ngOnInit(): void {
    combineLatest({
      branch: this.viewService.branch$, 
      name: this.viewService.name$
    }).pipe(
      switchMap(result => this.modelService.get(result.name, result.branch))
    ).subscribe(model => this.model = model);
  }

}
