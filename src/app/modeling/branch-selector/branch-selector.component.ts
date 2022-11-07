import { Component, OnInit } from '@angular/core';
import { ModelService } from '../shared/model.service';
import { ViewService } from '../shared/view.service';

@Component({
  selector: 'app-branch-selector',
  templateUrl: './branch-selector.component.html',
  styleUrls: ['./branch-selector.component.css']
})
export class BranchSelectorComponent implements OnInit {
  
  branches: string[] = [];
  selected: string = '';

  constructor(
    private modelService: ModelService,
    private viewService: ViewService
  ) { }

  ngOnInit(): void {
    this.modelService.getAllBranches().subscribe(result => 
      {
        this.branches = result;
        this.selected = result[0];
        this.onSelect();
      });
  }

  onSelect(): void {
    this.viewService.changeBranch(this.selected);
  }

}
