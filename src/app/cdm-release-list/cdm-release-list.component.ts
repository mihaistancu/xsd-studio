import { Component, Input, OnInit } from '@angular/core';
import { CdmRelease } from '../shared/cdm-release.service';

@Component({
  selector: 'app-cdm-release-list',
  templateUrl: './cdm-release-list.component.html',
  styleUrls: ['./cdm-release-list.component.css']
})
export class CdmReleaseListComponent implements OnInit {

  @Input()
  releases: CdmRelease[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
