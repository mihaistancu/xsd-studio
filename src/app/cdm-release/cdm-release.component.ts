import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdm-release',
  templateUrl: './cdm-release.component.html',
  styleUrls: ['./cdm-release.component.css']
})
export class CdmReleaseComponent implements OnInit {

  @Input()
  release = {
    id: '',
    code: '',
    name: '',
    description: '',
    activationDate: ''  
  };

  constructor() { }

  ngOnInit(): void { }

}
