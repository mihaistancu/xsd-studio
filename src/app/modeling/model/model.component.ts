import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
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
    this.viewService.name$.pipe(
      switchMap(name => this.modelService.get(name, 'version'))
    )
    .subscribe(model => {
      this.model = model;
    });
  }

}
