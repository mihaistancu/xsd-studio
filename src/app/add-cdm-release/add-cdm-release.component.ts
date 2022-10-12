import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddCdmReleaseRequest, CdmReleaseService } from '../shared/cdm-release.service';

@Component({
  selector: 'app-add-cdm-release',
  templateUrl: './add-cdm-release.component.html',
  styleUrls: ['./add-cdm-release.component.css']
})
export class AddCdmReleaseComponent implements OnInit {

  constructor(private location: Location, private service: CdmReleaseService) { }

  ngOnInit(): void {
  }

  onSave(request: AddCdmReleaseRequest) {
    this.service.add(request).subscribe(
      _ => this.location.back());
  }

}
