import { Component, OnInit } from '@angular/core';
import { CdmRelease, CdmReleaseSearchRequest, CdmReleaseService } from '../shared/cdm-release.service';

@Component({
  selector: 'app-cdm-release-search',
  templateUrl: './cdm-release-search.component.html',
  styleUrls: ['./cdm-release-search.component.css']
})
export class CdmReleaseSearchComponent implements OnInit {

  releases: CdmRelease[] = []
  
  constructor(private service: CdmReleaseService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(result => 
      this.releases = result);
  }

  onSearch(request: CdmReleaseSearchRequest) {
    this.service.search(request).subscribe(result =>
      this.releases = result);
  }

}
