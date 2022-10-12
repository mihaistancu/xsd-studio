import { Component, OnInit } from '@angular/core';
import { CdmRelease } from './cdm-release.model';

@Component({
  selector: 'app-cdm-release',
  templateUrl: './cdm-release.component.html',
  styleUrls: ['./cdm-release.component.css']
})
export class CdmReleaseComponent implements OnInit {

  release: CdmRelease = {
    code: '',
    name: '',
    sectors: '',
    description: '',
    activationDate: ''  
  };

  constructor() { }

  ngOnInit(): void {
  }

}
