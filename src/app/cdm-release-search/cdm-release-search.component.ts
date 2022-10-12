import { Component, OnInit } from '@angular/core';
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

  onSearch() {
    this.service.search({code:'',name:'',status:'',activationDate:''});
  }

}
