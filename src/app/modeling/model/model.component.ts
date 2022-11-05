import { Component, OnInit } from '@angular/core';
import { ViewService } from '../shared/view.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  name: string = '';

  constructor(private viewService: ViewService) { }

  ngOnInit(): void {
    this.viewService.name$.subscribe(name => {
      this.name = name;
    });
  }

}
