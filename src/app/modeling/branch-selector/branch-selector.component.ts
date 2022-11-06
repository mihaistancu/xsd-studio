import { Component, OnInit } from '@angular/core';
import { ModelService } from '../shared/model.service';

@Component({
  selector: 'app-branch-selector',
  templateUrl: './branch-selector.component.html',
  styleUrls: ['./branch-selector.component.css']
})
export class BranchSelectorComponent implements OnInit {
  
  branches: string[] = [];
  selected: string = '';

  constructor(private modelService: ModelService) { }

  ngOnInit(): void {
    this.modelService.getAllBranches().subscribe(result => 
      {
        this.branches = result;
        this.selected = result[0];
      });
  }

}
