import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdmReleaseService, ChangeRequest } from '../shared/cdm-release.service';

@Component({
  selector: 'app-add-change-request',
  templateUrl: './add-change-request.component.html',
  styleUrls: ['./add-change-request.component.css']
})
export class AddChangeRequestComponent implements OnInit {

  cdmCode: string = '';

  constructor(private route: ActivatedRoute, private service: CdmReleaseService) { }

  ngOnInit(): void {
    this.cdmCode = this.route.snapshot.paramMap.get('id')!;
  }

  onSave(request: ChangeRequest) {
    this.service.addChangeRequest({...request, cdmCode: this.cdmCode});
  }
}
