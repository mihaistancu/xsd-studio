import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdm-release-search',
  templateUrl: './cdm-release-search.component.html',
  styleUrls: ['./cdm-release-search.component.css']
})
export class CdmReleaseSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    console.log('search');
  }

}
