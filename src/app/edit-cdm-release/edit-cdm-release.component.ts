import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdmRelease, CdmReleaseService, ChangeRequest, UpdateCdmReleaseRequest } from '../shared/cdm-release.service';

@Component({
  selector: 'app-edit-cdm-release',
  templateUrl: './edit-cdm-release.component.html',
  styleUrls: ['./edit-cdm-release.component.css']
})
export class EditCdmReleaseComponent implements OnInit {

  cdmId!: string;
  release!: CdmRelease;
  changeRequests!: ChangeRequest[];

  constructor(
    private route: ActivatedRoute, 
    private location: Location,
    private service: CdmReleaseService) { }

  ngOnInit(): void {
    this.cdmId = this.route.snapshot.paramMap.get('cdmId')!;
    this.service.get(this.cdmId).subscribe(result => this.release = result);
    this.service.getChangeRequests(this.cdmId).subscribe(result => this.changeRequests = result);
  }

  onSave(request: UpdateCdmReleaseRequest) {
    this.service.update(request).subscribe(
      _ => this.location.back());
  }
}
