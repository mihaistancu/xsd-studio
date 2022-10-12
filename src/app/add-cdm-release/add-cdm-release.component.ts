import { Component, OnInit } from '@angular/core';
import { CdmRelease } from '../cdm-release/cdm-release.model';

@Component({
  selector: 'app-add-cdm-release',
  templateUrl: './add-cdm-release.component.html',
  styleUrls: ['./add-cdm-release.component.css']
})
export class AddCdmReleaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSave(release: CdmRelease) {
    console.log(release);
  }

}
