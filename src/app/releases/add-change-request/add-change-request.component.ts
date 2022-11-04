import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdmReleaseService, ChangeRequest } from '../shared/cdm-release.service';

@Component({
  selector: 'app-add-change-request',
  templateUrl: './add-change-request.component.html',
  styleUrls: ['./add-change-request.component.css']
})
export class AddChangeRequestComponent implements OnInit {

  cdmId: string = '';

  constructor(
    private route: ActivatedRoute, 
    private location: Location, 
    private service: CdmReleaseService) { }

  ngOnInit(): void {
    this.cdmId = this.route.snapshot.paramMap.get('cdmId')!;
  }

  onSave(request: ChangeRequest) {
    this.service.addChangeRequest({...request, cdmId: this.cdmId}).subscribe(
      _ => this.location.back());
  }
}
