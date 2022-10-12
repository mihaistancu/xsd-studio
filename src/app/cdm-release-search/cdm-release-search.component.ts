import { Component, OnInit } from '@angular/core';
import { CdmReleaseSearchRequest, CdmReleaseService } from '../shared/cdm-release.service';

@Component({
  selector: 'app-cdm-release-search',
  templateUrl: './cdm-release-search.component.html',
  styleUrls: ['./cdm-release-search.component.css']
})
export class CdmReleaseSearchComponent implements OnInit {

  constructor(private service: CdmReleaseService) { }

  ngOnInit(): void {
  }

  onSearch(request: CdmReleaseSearchRequest) {
    this.service.search(request);
  }

}
