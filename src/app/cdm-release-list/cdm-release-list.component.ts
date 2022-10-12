import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdm-release-list',
  templateUrl: './cdm-release-list.component.html',
  styleUrls: ['./cdm-release-list.component.css']
})
export class CdmReleaseListComponent implements OnInit {

  releaseList  = [
    {code:'1', name:'1',description:'first release',status:'published',activationDate:'20220101'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
