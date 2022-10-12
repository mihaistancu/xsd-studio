import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdmReleaseService, ChangeRequest, UpdateCdmReleaseRequest } from '../shared/cdm-release.service';

@Component({
  selector: 'app-edit-cdm-release',
  templateUrl: './edit-cdm-release.component.html',
  styleUrls: ['./edit-cdm-release.component.css']
})
export class EditCdmReleaseComponent implements OnInit {

  cdmCode: string = '';
  changeRequests: ChangeRequest[] = [];

  constructor(private route: ActivatedRoute, private service: CdmReleaseService) { }

  ngOnInit(): void {
    this.cdmCode = this.route.snapshot.paramMap.get('cdmCode')!;

    this.service.getChangeRequests(this.cdmCode).subscribe(result => this.changeRequests = result);
  }

  onSave(request: UpdateCdmReleaseRequest) {
    this.service.update(request);
  }
}
