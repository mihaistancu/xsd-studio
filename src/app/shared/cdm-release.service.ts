import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CdmReleaseService {

  private RELEASES: CdmRelease[] = [];
  private CRS: {[cdmCode: string]: ChangeRequest[]} = {};

  constructor() { }

  search(request: CdmReleaseSearchRequest): Observable<CdmRelease[]> {
    return of(this.RELEASES);
  }

  add(request: AddCdmReleaseRequest) {
    this.RELEASES.push({...request, status: 'Draft'});
    return of();
  }

  addChangeRequest(request: AddChangeRequestRequest) {
    this.CRS[request.cdmCode] = this.CRS[request.cdmCode] ?? [];  
    this.CRS[request.cdmCode].push(request);
  }
}

export interface AddCdmReleaseRequest {
  code: string,
  name: string,
  description: string,
  activationDate: string
}

export interface CdmReleaseSearchRequest {
  code: string,
  name: string,
  status: string, 
  activationDate: string
}

export interface CdmRelease {
  code: string,
  name: string,
  status: string,
  description: string,
  activationDate: string
}

export interface AddChangeRequestRequest {
  cdmCode: string,
  id: string,
  summary: string,
  sectors: string,
  jiraLink: string
}

export interface ChangeRequest {
  id: string,
  summary: string,
  sectors: string,
  jiraLink: string
}