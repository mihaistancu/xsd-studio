import { Component, Input, OnInit } from '@angular/core';
import { ChangeRequest } from '../shared/cdm-release.service';

@Component({
  selector: 'app-change-request-list',
  templateUrl: './change-request-list.component.html',
  styleUrls: ['./change-request-list.component.css']
})
export class ChangeRequestListComponent implements OnInit {

  @Input()
  changeRequests: ChangeRequest[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
