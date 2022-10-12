import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CdmReleaseService {

  private RELEASES: CdmRelease[] = [];

  constructor() { }

  search(request: CdmReleaseSearchRequest): Observable<CdmRelease[]> {
    return of(this.RELEASES);
  }

  add(request: AddCdmReleaseRequest) {
    this.RELEASES.push({
      code: request.code,
      name: request.name,
      activationDate: request.activationDate,
      description: request.description,
      status: 'Draft'
    });
    return of();
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