import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CdmReleaseService {

  private counter = 0;
  private RELEASES: CdmRelease[] = [];
  private CRS: {[cdmId: string]: ChangeRequest[]} = {};

  constructor() { }

  getAll(): Observable<CdmRelease[]> {
    return of(this.RELEASES);
  }
  
  search(request: CdmReleaseSearchRequest): Observable<CdmRelease[]> {
    return of(this.RELEASES);
  }

  add(request: AddCdmReleaseRequest): Observable<void> {
    this.RELEASES.push({...request, id: `${this.counter++}`, status: 'Draft'});
    return of(void 0);
  }

  update(request: UpdateCdmReleaseRequest): Observable<void> {
    const id = this.RELEASES.findIndex(r => r.id == request.id);
    this.RELEASES[id] == request;
    return of(void 0);
  }

  get(cdmId: string): Observable<CdmRelease> {
    return of(this.RELEASES.find(r => r.id == cdmId)!);
  }

  getChangeRequests(cdmId: string): Observable<ChangeRequest[]> {
    return of(this.CRS[cdmId]);
  }

  addChangeRequest(request: AddChangeRequestRequest): Observable<void> {
    this.CRS[request.cdmId] = this.CRS[request.cdmId] ?? [];  
    this.CRS[request.cdmId].push(request);
    return of(void 0);
  }
}

export interface AddCdmReleaseRequest {
  code: string,
  name: string,
  description: string,
  activationDate: string
}

export interface UpdateCdmReleaseRequest {
  id: string,
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
  id: string;
  code: string,
  name: string,
  status: string,
  description: string,
  activationDate: string
}

export interface AddChangeRequestRequest {
  cdmId: string,
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