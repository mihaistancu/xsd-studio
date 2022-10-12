import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-request',
  templateUrl: './change-request.component.html',
  styleUrls: ['./change-request.component.css']
})
export class ChangeRequestComponent implements OnInit {

  request = {
    id: '',
    summary: '',
    sectors: '',
    jiraLink: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
