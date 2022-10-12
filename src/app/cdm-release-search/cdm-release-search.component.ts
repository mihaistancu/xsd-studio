import { Component, OnInit } from '@angular/core';
import { CdmReleaseSearchParameters } from '../cdm-release-search-parameters/cdm-release-search-parameters.model';
import { CdmReleaseSearchService } from './cdm-release-search.service';

@Component({
  selector: 'app-cdm-release-search',
  templateUrl: './cdm-release-search.component.html',
  styleUrls: ['./cdm-release-search.component.css']
})
export class CdmReleaseSearchComponent implements OnInit {

  constructor(private service: CdmReleaseSearchService) { }

  ngOnInit(): void {
  }

  onSearch(request: CdmReleaseSearchParameters) {
    this.service.search(request);
  }

}
