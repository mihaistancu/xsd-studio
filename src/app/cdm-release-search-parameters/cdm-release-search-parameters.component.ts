import { Component, OnInit } from '@angular/core';
import { CdmReleaseSearchParameters } from './cdm-release-search-parameters.model';

@Component({
  selector: 'app-cdm-release-search-parameters',
  templateUrl: './cdm-release-search-parameters.component.html',
  styleUrls: ['./cdm-release-search-parameters.component.css']
})
export class CdmReleaseSearchParametersComponent implements OnInit {

  parameters: CdmReleaseSearchParameters = {
    code: '',
    name: '',
    status: '',
    activationDate: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
