import { Component, Input, OnInit } from '@angular/core';
import { AddChangeRequestRequest, CdmReleaseService, ChangeRequest } from '../shared/cdm-release.service';

@Component({
  selector: 'app-add-change-request',
  templateUrl: './add-change-request.component.html',
  styleUrls: ['./add-change-request.component.css']
})
export class AddChangeRequestComponent implements OnInit {

  @Input()
  cdmCode: string = '';

  constructor(private service: CdmReleaseService) { }

  ngOnInit(): void {
  }

  onSave(request: ChangeRequest) {
    this.service.addChangeRequest({...request, cdmCode: this.cdmCode});
  }
}
