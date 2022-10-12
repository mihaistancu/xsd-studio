import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CdmReleaseService {

  constructor() { }

  search(request: CdmReleaseSearchRequest) {
    console.log(request);
  }

  add(request: AddCdmReleaseRequest) {
    console.log(request);
  }
}

export interface AddCdmReleaseRequest {
  code: string,
  name: string,
  sectors: string,
  description: string,
  activationDate: string
}

export interface CdmReleaseSearchRequest {
  code: string,
  name: string,
  status: string, 
  activationDate: string
}