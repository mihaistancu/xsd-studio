import { Component, Input, OnInit } from '@angular/core';
import { CdmReleaseService } from '../shared/cdm-release.service';

@Component({
  selector: 'app-cdm-release',
  templateUrl: './cdm-release.component.html',
  styleUrls: ['./cdm-release.component.css']
})
export class CdmReleaseComponent implements OnInit {

  @Input()
  cdmCode: string = '';

  release = {
    code: '',
    name: '',
    description: '',
    activationDate: ''  
  };

  constructor(private service: CdmReleaseService) { }

  ngOnInit(): void {
    if (this.cdmCode) {
      this.service.get(this.cdmCode).subscribe(result => this.release = result);
    }
  }

}
